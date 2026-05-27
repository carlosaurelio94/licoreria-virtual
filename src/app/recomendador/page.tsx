"use client";

import { useState, useMemo } from "react";
import { useI18n } from "@/lib/i18n";
import { products, type FlavorProfile, type LiquorType } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

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
        list = list.filter((p) => ["whisky", "cognac", "vino"].includes(p.type) || p.priceArs > 25000);
      } else if (answers.occasion === "sobremesa") {
        list = list.filter((p) => ["ron", "cognac", "vino", "licor", "whisky"].includes(p.type));
      }
    }

    list = [...list].sort((a, b) => b.rating - a.rating);
    return list.slice(0, 3);
  }, [answers]);

  const setOption = (v: string) => {
    setAnswers({ ...answers, [currentKey]: v });
  };

  const next = () => {
    if (step < questions.length - 1) setStep(step + 1);
    else setDone(true);
  };

  const back = () => {
    if (step > 0) setStep(step - 1);
  };

  const restart = () => {
    setAnswers(empty);
    setStep(0);
    setDone(false);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="font-serif text-3xl font-bold text-neutral-100 md:text-4xl">
        🤖 {t.recommender.title}
      </h1>
      <p className="mt-2 text-neutral-400">{t.recommender.subtitle}</p>

      {!done ? (
        <div className="mt-8 rounded-xl border border-neutral-800 bg-neutral-900 p-6">
          <div className="mb-4 flex items-center justify-between text-xs text-neutral-500">
            <span>
              {step + 1} / {questions.length}
            </span>
            <div className="flex gap-1">
              {questions.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 w-8 rounded ${
                    i <= step ? "bg-amber-500" : "bg-neutral-700"
                  }`}
                />
              ))}
            </div>
          </div>

          <h2 className="mb-4 text-xl font-semibold text-neutral-100">{current.q}</h2>
          <div className="grid gap-2">
            {current.options.map((opt) => (
              <button
                key={opt.v}
                type="button"
                onClick={() => setOption(opt.v)}
                className={`rounded border px-4 py-3 text-left text-sm transition ${
                  currentValue === opt.v
                    ? "border-amber-500 bg-amber-500/20 text-amber-200"
                    : "border-neutral-700 bg-neutral-950 text-neutral-200 hover:border-amber-500/60"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <button
              type="button"
              onClick={back}
              disabled={step === 0}
              className="text-sm text-neutral-400 hover:text-amber-400 disabled:opacity-30"
            >
              ← {t.recommender.back}
            </button>
            <button
              type="button"
              onClick={next}
              disabled={!currentValue}
              className="rounded bg-amber-500 px-5 py-2 font-semibold text-neutral-950 hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {step === questions.length - 1 ? t.recommender.finish : t.recommender.next}
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-8">
          <h2 className="mb-4 font-serif text-2xl font-bold text-amber-400">
            ✨ {t.recommender.resultTitle}
          </h2>

          {recommendations.length === 0 ? (
            <p className="text-neutral-400">{t.recommender.noMatch}</p>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {recommendations.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={restart}
            className="mt-6 rounded border border-amber-500 px-4 py-2 text-sm font-semibold text-amber-400 hover:bg-amber-500/10"
          >
            ↺ {t.recommender.restart}
          </button>
        </div>
      )}
    </div>
  );
}
