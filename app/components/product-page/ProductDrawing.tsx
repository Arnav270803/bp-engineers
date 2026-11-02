import { useId } from "react";
import { productPageText, type DrawingKind } from "~/content/product-pages";
import { cx } from "~/lib/cx";

export type DrawingTone = "light" | "dark";

interface Palette {
  line: string;
  accent: string;
  fill: string;
  axis: string;
  label: string;
}

// Shapes are filled with the background they sit on, so that a part drawn in
// front hides the lines behind it.
const palettes: Record<DrawingTone, Palette> = {
  light: {
    line: "stroke-editorial-ink",
    accent: "stroke-editorial-accent",
    fill: "fill-editorial-panel",
    axis: "stroke-editorial-subtle",
    label: "fill-editorial-subtle",
  },
  dark: {
    line: "stroke-editorial-on-dark",
    accent: "stroke-editorial-accent-on-dark",
    fill: "fill-editorial-dark",
    axis: "stroke-editorial-on-dark-muted",
    label: "fill-editorial-on-dark-muted",
  },
};

/** A centre line, dashed as on an engineering drawing. */
function Axis({ p, y }: { p: Palette; y: number }) {
  return (
    <line x1="24" y1={y} x2="276" y2={y} className={p.axis} strokeWidth={0.8} strokeDasharray="12 4 3 4" />
  );
}

/** Cope on drag, assembled, with guide pins through both ears and a pouring cup on top. */
function MouldingBoxes({ p, hatch }: { p: Palette; hatch: string }) {
  return (
    <>
      <path d="M137 49H163L157 62H143Z" className={p.axis} strokeWidth={1} />
      <g className={cx(p.line, p.fill)}>
        {[62, 116].map((y) => (
          <g key={y}>
            <rect x="70" y={y + 5} width="160" height="44" />
            <rect x="66" y={y} width="168" height="5" />
            <rect x="66" y={y + 49} width="168" height="5" />
          </g>
        ))}
        <rect x="38" y="104" width="28" height="12" />
        <rect x="38" y="116" width="28" height="12" />
        <rect x="234" y="104" width="28" height="12" />
        <rect x="234" y="116" width="28" height="12" />
      </g>
      <g className={p.line}>
        {[62, 116].map((y) => (
          <g key={y}>
            <line x1="123.3" y1={y + 5} x2="123.3" y2={y + 49} />
            <line x1="176.7" y1={y + 5} x2="176.7" y2={y + 49} />
          </g>
        ))}
      </g>
      {[52, 248].map((x) => (
        <g key={x}>
          <rect
            x={x - 7}
            y="102"
            width="14"
            height="14"
            fill={hatch}
            className={p.accent}
            strokeWidth={1.2}
          />
          <path
            d={`M${x - 4} 140V90L${x - 2} 85H${x + 2}L${x + 4} 90V140Z`}
            className={cx(p.accent, p.fill)}
          />
        </g>
      ))}
      <g className={p.axis} strokeWidth={0.8} strokeDasharray="10 3 2 3">
        <line x1="52" y1="76" x2="52" y2="152" />
        <line x1="248" y1="76" x2="248" y2="152" />
      </g>
    </>
  );
}

/** A pallet car on its rail, carrying a mould shown dashed. */
function PalletCar({ p }: { p: Palette }) {
  return (
    <>
      <g className={p.axis} strokeWidth={1} strokeDasharray="5 4">
        <rect x="84" y="66" width="132" height="46" />
        <line x1="84" y1="89" x2="216" y2="89" />
      </g>
      <rect x="50" y="112" width="200" height="18" className={cx(p.line, p.fill)} />
      <line x1="50" y1="112" x2="250" y2="112" className={p.accent} />
      {[92, 208].map((x) => (
        <g key={x}>
          <circle cx={x} cy="152" r="22" className={cx(p.line, p.fill)} />
          <circle cx={x} cy="152" r="7" className={cx(p.accent, p.fill)} />
        </g>
      ))}
      <line x1="28" y1="175" x2="272" y2="175" className={p.line} strokeWidth={2.2} />
    </>
  );
}

/** A round bush and an oval bush, seen end on. */
function BushPair({ p }: { p: Palette }) {
  return (
    <>
      {[100, 200].map((x) => (
        <g key={x}>
          <circle cx={x} cy="104" r="44" className={cx(p.line, p.fill)} />
          <circle cx={x} cy="104" r="39" className={p.line} strokeWidth={0.7} />
        </g>
      ))}
      <circle cx="100" cy="104" r="20" className={cx(p.accent, p.fill)} />
      <path d="M188 92a12 12 0 0124 0v26a12 12 0 01-24 0z" className={cx(p.accent, p.fill)} />
      <g
        className={cx(p.label, "font-editorial-heavy uppercase")}
        fontSize="8.5"
        letterSpacing="2"
        textAnchor="middle"
      >
        <text x="100" y="176">
          {productPageText.bushLabels.round}
        </text>
        <text x="200" y="176">
          {productPageText.bushLabels.oval}
        </text>
      </g>
    </>
  );
}

/** A moulding pin: head, shoulder and a ground shank with a chamfered tip. */
function MouldingPin({ p }: { p: Palette }) {
  return (
    <>
      <rect x="40" y="82" width="18" height="60" className={cx(p.line, p.fill)} />
      <rect x="58" y="96" width="28" height="32" className={cx(p.line, p.fill)} />
      <path d="M86 99H236L252 106V118L236 125H86Z" className={cx(p.accent, p.fill)} />
      <line x1="96" y1="103" x2="226" y2="103" className={p.accent} strokeWidth={0.6} />
      <Axis p={p} y={112} />
    </>
  );
}

/** A closing pin: a long taper, a collar and a cross hole. */
function ClosingPin({ p }: { p: Palette }) {
  return (
    <>
      <path d="M48 100H206L262 108V116L206 124H48L42 118V106Z" className={cx(p.line, p.fill)} />
      <rect x="112" y="91" width="14" height="42" className={cx(p.accent, p.fill)} />
      <circle cx="66" cy="112" r="5" className={cx(p.accent, p.fill)} />
      <Axis p={p} y={112} />
    </>
  );
}

/** A belt conveyor carrying sand, with its pulleys, idlers and stand. */
function ConveyorBelt({ p }: { p: Palette }) {
  return (
    <>
      <line x1="30" y1="170" x2="270" y2="170" className={p.line} strokeWidth={2.2} />
      <g className={p.line}>
        <line x1="72" y1="114" x2="72" y2="170" />
        <line x1="228" y1="114" x2="228" y2="170" />
        <line x1="72" y1="148" x2="228" y2="148" />
        <path d="M60 78H240M60 114H240" />
      </g>
      {[60, 240].map((x) => (
        <g key={x}>
          <circle cx={x} cy="96" r="18" className={cx(p.line, p.fill)} />
          <circle cx={x} cy="96" r="5" className={cx(p.accent, p.fill)} />
        </g>
      ))}
      {[105, 150, 195].map((x) => (
        <circle key={x} cx={x} cy="84" r="5" className={cx(p.line, p.fill)} />
      ))}
      <path d="M86 78Q110 60 134 78M152 78Q170 66 188 78" className={p.accent} />
    </>
  );
}

/** A conveyor roller on its shaft, with the bearing housings in each end. */
function ConveyorRoller({ p }: { p: Palette }) {
  return (
    <>
      <rect x="44" y="106" width="212" height="12" className={cx(p.line, p.fill)} />
      <rect x="70" y="82" width="160" height="60" className={cx(p.line, p.fill)} />
      <rect x="74" y="92" width="10" height="40" className={cx(p.accent, p.fill)} />
      <rect x="216" y="92" width="10" height="40" className={cx(p.accent, p.fill)} />
      <Axis p={p} y={112} />
    </>
  );
}

/** The line drawing that stands for a product, on a 300 by 225 grid. */
export function ProductDrawing({
  kind,
  tone,
  className,
}: {
  kind: DrawingKind;
  tone: DrawingTone;
  className?: string;
}) {
  const p = palettes[tone];
  const hatch = `hatch${useId().replace(/[^\w-]/g, "")}`;
  return (
    <svg viewBox="0 0 300 225" className={className} fill="none" strokeWidth={1.4} aria-hidden="true">
      <defs>
        <pattern id={hatch} patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="4" className={p.accent} strokeWidth={1} />
        </pattern>
      </defs>
      {kind === "moulding-boxes" && <MouldingBoxes p={p} hatch={`url(#${hatch})`} />}
      {kind === "pallet-cars" && <PalletCar p={p} />}
      {kind === "bushes" && <BushPair p={p} />}
      {kind === "matchplate-pins" && <MouldingPin p={p} />}
      {kind === "closing-pins" && <ClosingPin p={p} />}
      {kind === "conveyor-belts" && <ConveyorBelt p={p} />}
      {kind === "conveyor-rollers" && <ConveyorRoller p={p} />}
    </svg>
  );
}
