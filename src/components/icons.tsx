import { useId, type SVGProps } from "react";

type IconSize = { size?: number };

export const Decanter = ({ size = 32 }: IconSize) => {
  const rawId = useId();
  const id = `grad-${rawId.replace(/:/g, "")}`;
  const stroke = `url(#${id})`;
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="none">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6e4d18" />
          <stop offset="25%" stopColor="#f4e5b1" />
          <stop offset="50%" stopColor="#d9b870" />
          <stop offset="75%" stopColor="#8b6914" />
          <stop offset="100%" stopColor="#e9cf86" />
        </linearGradient>
      </defs>
      <rect x="12" y="2.5" width="8" height="3" rx="0.5" stroke={stroke} strokeWidth="1.3" />
      <rect x="13.5" y="5.5" width="5" height="2" stroke={stroke} strokeWidth="1.3" />
      <path
        d="M14 7.5 L14 11 L10 14.5 C9 15.4 8.5 16.8 8.5 18 L8.5 25 C8.5 26.7 9.8 28 11.5 28 L20.5 28 C22.2 28 23.5 26.7 23.5 25 L23.5 18 C23.5 16.8 23 15.4 22 14.5 L18 11 L18 7.5 Z"
        stroke={stroke}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 19 Q12 18.4 16 18.6 T22.8 19"
        stroke={stroke}
        strokeWidth="0.9"
        opacity="0.7"
      />
    </svg>
  );
};

export const Cart = ({ size = 18 }: IconSize) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
  >
    <path
      d="M3 4 H6 L7.6 16.2 C7.75 17.2 8.6 17.9 9.6 17.9 H18.6 C19.6 17.9 20.4 17.2 20.55 16.2 L21.7 8 H7.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="10" cy="20.4" r="1.2" />
    <circle cx="18" cy="20.4" r="1.2" />
  </svg>
);

export const Plus = ({ size = 16 }: IconSize) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="none">
    <path d="M8 3 V13 M3 8 H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const Minus = ({ size = 16 }: IconSize) => (
  <svg viewBox="0 0 16 16" width={size} height={size} fill="none">
    <path d="M3 8 H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const ArrowRight = ({ size = 12 }: IconSize) => (
  <svg
    viewBox="0 0 16 12"
    width={size + 4}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M0 6 H14 M9 1 L14 6 L9 11" />
  </svg>
);

export const Star = ({ filled = true, size = 11 }: IconSize & { filled?: boolean }) => (
  <svg
    viewBox="0 0 12 12"
    width={size}
    height={size}
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="0.8"
    strokeLinejoin="round"
  >
    <path d="M6 0.8 L7.45 4.18 L11.1 4.55 L8.35 7.02 L9.15 10.6 L6 8.72 L2.85 10.6 L3.65 7.02 L0.9 4.55 L4.55 4.18 Z" />
  </svg>
);

export const Laurel = ({ size = 12 }: IconSize) => (
  <svg
    viewBox="0 0 16 16"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="0.9"
    strokeLinecap="round"
  >
    <path d="M3.5 14 C3 11.5 3.4 8.5 5 6.5 C6.6 4.5 8 3 8 1.5 C8 3 9.4 4.5 11 6.5 C12.6 8.5 13 11.5 12.5 14" />
    <path d="M4.5 9.5 L3 9 M4.2 11.5 L2.5 11.2 M11.5 9.5 L13 9 M11.8 11.5 L13.5 11.2 M5.2 7.5 L3.8 7 M10.8 7.5 L12.2 7" />
  </svg>
);

export const Close = ({ size = 16 }: IconSize) => (
  <svg
    viewBox="0 0 16 16"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
  >
    <path d="M3 3 L13 13 M13 3 L3 13" />
  </svg>
);

export const MenuIcon = ({ size = 18 }: IconSize) => (
  <svg
    viewBox="0 0 18 14"
    width={size}
    height={size - 4}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
  >
    <path d="M2 2 H16 M2 7 H16 M2 12 H10" />
  </svg>
);

/* ─── Category / liquor type icons ─── */
export const AllIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    width="28"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="5" y="5" width="9" height="9" />
    <rect x="18" y="5" width="9" height="9" />
    <rect x="5" y="18" width="9" height="9" />
    <rect x="18" y="18" width="9" height="9" />
  </svg>
);

export const WhiskyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    width="28"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 6 L23 6 L21.5 25 C21.4 26.4 20.2 27.5 18.8 27.5 L13.2 27.5 C11.8 27.5 10.6 26.4 10.5 25 Z" />
    <path d="M10 16 Q16 14.5 22 16" opacity="0.6" />
  </svg>
);

export const RumIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    width="28"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="13" y="3" width="6" height="3" />
    <path d="M11 8 L21 8 L21 11 C22 12 22.5 13.5 22.5 15 L22.5 26 C22.5 27.4 21.4 28.5 20 28.5 L12 28.5 C10.6 28.5 9.5 27.4 9.5 26 L9.5 15 C9.5 13.5 10 12 11 11 Z" />
  </svg>
);

export const TequilaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    width="28"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 2 L17 8 M16 2 L15 8 M16 2 L19 7 M16 2 L13 7 M16 2 L21 6 M16 2 L11 6" />
    <path d="M10 9 L22 9 L21 24 C20.9 25.4 19.7 26.5 18.3 26.5 L13.7 26.5 C12.3 26.5 11.1 25.4 11 24 Z" />
  </svg>
);

export const CognacIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    width="28"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M8 12 C8 8 11 6 16 6 C21 6 24 8 24 12 C24 17 21 21 18 22 L18 26 L20 27 L12 27 L14 26 L14 22 C11 21 8 17 8 12 Z" />
    <path d="M10 13 Q16 11 22 13" opacity="0.5" />
  </svg>
);

export const GinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    width="28"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3 L20 3 L20 7 L23 13 C23.5 14 23.5 15 23 16 L21 27 C20.9 27.8 20.3 28.5 19.5 28.5 L12.5 28.5 C11.7 28.5 11.1 27.8 11 27 L9 16 C8.5 15 8.5 14 9 13 L12 7 Z" />
    <circle cx="14" cy="20" r="0.8" fill="currentColor" opacity="0.6" />
    <circle cx="18" cy="22" r="0.6" fill="currentColor" opacity="0.6" />
  </svg>
);

export const WineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    width="28"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M13 3 L19 3 L19 8 L20 11 C20 16 18 19 17 20 L17 26 L20 27 L12 27 L15 26 L15 20 C14 19 12 16 12 11 L13 8 Z" />
  </svg>
);

export const BeerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    width="28"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 9 L21 9 L21 26 C21 27.1 20.1 28 19 28 L11 28 C9.9 28 9 27.1 9 26 Z" />
    <path d="M21 13 L25 13 L25 22 L21 22" />
    <path d="M10 12 L20 12 M10 16 L20 16" opacity="0.4" />
  </svg>
);

export const LiqueurIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    width="28"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="13" y="3" width="6" height="3" />
    <path d="M11 7 L21 7 L21 12 L23 14 L23 28 L9 28 L9 14 L11 12 Z" />
    <path d="M11 19 L21 19" opacity="0.5" />
  </svg>
);

export const CigarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 18 L24 14" />
    <path d="M3 18 C5 18.5 7 18 8 17 L25 13.5 C26.5 13.2 28 12.4 28.5 11" />
    <path d="M20 14.5 L22 14" opacity="0.6" />
    <path d="M2 19 Q1 17.5 2 16" />
  </svg>
);

export const GlassIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 5 L23 5 L21 27 L11 27 Z" />
    <path d="M10 16 L22 16" opacity="0.5" />
  </svg>
);

export const DiamondIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 12 L16 4 L26 12 L16 28 Z" />
    <path d="M6 12 L26 12 M11 12 L16 28 M21 12 L16 28" opacity="0.5" />
  </svg>
);

import type { LiquorType } from "@/data/products";
import type { ComponentType } from "react";

export const TYPE_ICONS: Record<LiquorType, ComponentType<SVGProps<SVGSVGElement>>> = {
  whisky: WhiskyIcon,
  vodka: LiqueurIcon,
  ron: RumIcon,
  tequila: TequilaIcon,
  gin: GinIcon,
  cognac: CognacIcon,
  vino: WineIcon,
  cerveza: BeerIcon,
  licor: LiqueurIcon,
};

export function Stars({ rating }: { rating: number }) {
  const full = Math.round(rating);
  return (
    <div className="stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} filled={i < full} />
      ))}
    </div>
  );
}
