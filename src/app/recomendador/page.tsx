"use client";

import { useState, useMemo } from "react";
import { useI18n } from "@/lib/i18n";
import { products, type FlavorProfile, type LiquorType } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ArrowRight } from "@/components/icons";

type Answers = {
  type: string;
  profile: string;
  occasion: string;
  budget: string;
};

const empty: Answers = { type: "", profile: "", occasion: "", budget: "" };

export default function RecomendadorPage() {
  const { t } = useI18n();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(empty);
  const [done, setDone] = useState(false);

  const questions = t.recommender.questions;
  const keys: (keyof Answers)[] = ["type", "profile", "occasion", "budget"];

  const current = questions[step];
  const currentKey = keys[step];
  const currentValue = answers[currentKey];

  const recommendations = useMemo(() => {
    let list = products.slice();

    if (answers.type && answers.type !== "any") {
      list = list.filter((p) => p.type === (answers.type as LiquorType));
    }
    if (answers.profile && answers.profile !== "any") {
      list = list.filter((p) => p.profile.includes(answers.profile as FlavorProfile));
    }
    if (answers.budget && answers.budget !== "any") {
      list = list.filter((p) => {
        if (answers.budget === "low") return p.priceArs < 20000;
        if (answers.budget === "mid") return p.priceArs >= 20000 && p.priceArs <= 40000;
        if (answers.budget === "high") return p.priceArs > 40000;
        return true;
      });
    }
    if (answers.occasion && answers.occasion !== "any") {
      if (answers.occasion === "celebracion") {
        list = list.sort((a, b) => b.priceArs - a.priceArs);
      } else if (answers.occasion === "coctel") {
        list = list.filter((p) =>
          ["vodka", "gin", "ron", "tequila", "licor"].includes(p.type),
        );
      } else if (answers.occasion === "solo") {
        list = list.filter(
          (p) => ["whisky", "cognac", "vino"].includes(p.type) || p.priceArs > 25000,
        );
      } else if (answers.occasion === "sobremesa") {
        list = list.filter((p) => ["ron", "cognac", "vino", "licor", "whisky"].includes(p.type));
      }
    }

    list = [...list].sort((a, b) => b.rating - a.rating);
    return list.slice(0, 3);
  }, [answers]);

  const setOption = (v: string) => setAnswers({ ...answers, [currentKey]: v });
  const next = () => {
    if (step < questions.length - 1) setStep(step + 1);
    else setDone(true);
  };
  const back = () => step > 0 && setStep(step - 1);
  const restart = () => {
    setAnswers(empty);
    setStep(0);
    setDone(false);
  };

  return (
    <div>
      <section className="page-head">
        <div className="wrap inner">
          <div
            className="eyebrow caps"
            style={{ color: "var(--gold-text)", display: "flex", alignItems: "center", gap: 14 }}
          >
            <span style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.7 }} />
            <span>{t.recommender.eyebrow}</span>
          </div>
          <h1>
            {t.recommender.h1Pre}
            <em>{t.recommender.h1Em}</em>
            {t.recommender.h1Post}
          </h1>
          <p className="sub">{t.recommender.sub}</p>
        </div>
      </section>

      <section style={{ padding: "50px 0 110px" }}>
        <div className="wrap" style={{ maxWidth: 720 }}>
          {!done ? (
            <div className="quiz">
              <div className="progress">
                {questions.map((_, i) => (
                  <span key={i} className={"seg" + (i <= step ? " on" : "")} />
                ))}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 24,
                  fontSize: 10.5,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "var(--ash)",
                }}
              >
                <span>
                  {step + 1} / {questions.length}
                </span>
              </div>
              <h2 className="q">{current.q}</h2>
              <div className="opts">
                {current.options.map((opt) => (
                  <button
                    key={opt.v}
                    type="button"
                    onClick={() => setOption(opt.v)}
                    className={"opt" + (currentValue === opt.v ? " selected" : "")}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <div className="nav">
                <button
                  type="button"
                  onClick={back}
                  disabled={step === 0}
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "var(--ash)",
                    background: "none",
                    border: "none",
                    opacity: step === 0 ? 0.3 : 1,
                    cursor: step === 0 ? "not-allowed" : "pointer",
                  }}
                >
                  ← {t.recommender.back}
                </button>
                <button
                  type="button"
                  onClick={next}
                  disabled={!currentValue}
                  className="btn btn-gold shimmer"
                  style={{
                    opacity: !currentValue ? 0.4 : 1,
                    cursor: !currentValue ? "not-allowed" : "pointer",
                  }}
                >
                  {step === questions.length - 1 ? t.recommender.finish : t.recommender.next}{" "}
                  <ArrowRight />
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div
                className="eyebrow caps"
                style={{
                  color: "var(--gold-text)",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  marginBottom: 18,
                }}
              >
                <span style={{ width: 28, height: 1, background: "var(--gold)", opacity: 0.7 }} />
                <span>{t.recommender.resultEyebrow}</span>
              </div>
              <h2
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 500,
                  fontSize: "clamp(28px, 4vw, 44px)",
                  lineHeight: 1.05,
                  color: "var(--bone)",
                  margin: "0 0 36px",
                }}
              >
                {t.recommender.resultTitle}
              </h2>

              {recommendations.length === 0 ? (
                <p style={{ color: "var(--ash)" }}>{t.recommender.noMatch}</p>
              ) : (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: 20,
                  }}
                >
                  {recommendations.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}

              <button
                type="button"
                onClick={restart}
                className="btn"
                style={{ marginTop: 32 }}
              >
                ↺ {t.recommender.restart}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
