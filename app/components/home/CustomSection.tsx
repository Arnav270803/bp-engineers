import { useId } from "react";
import { homeCustom } from "~/content/home";
import { ArrowUpRight, Eyebrow, PillLink, TitleText, sectionTitle } from "./parts";

// An isometric moulding box (cope on drag) on a 470 by 290 sheet. x runs to
// the right and back, y to the left and back, z up; (0, 0, 0) is the front
// corner at the bottom.
const W = 190;
const L = 170;
const H = 64;
const T = 14; // wall thickness seen on the rim
const ORIGIN = { x: 235, y: 252 };
const COS = Math.cos(Math.PI / 6);

function at(x: number, y: number, z: number): [number, number] {
  return [ORIGIN.x + (x - y) * COS, ORIGIN.y - (x + y) * 0.5 - z];
}
const path = (...points: Array<[number, number, number]>) =>
  points
    .map(
      ([x, y, z], index) =>
        `${index === 0 ? "M" : "L"}${at(x, y, z)
          .map((n) => n.toFixed(1))
          .join(" ")}`,
    )
    .join("");

const outline = [
  path([0, 0, H], [W, 0, H], [W, L, H], [0, L, H], [0, 0, H]),
  path([T, T, H], [W - T, T, H], [W - T, L - T, H], [T, L - T, H], [T, T, H]),
  path([0, L, H], [0, L, 0], [0, 0, 0], [W, 0, 0], [W, 0, H]),
  path([0, 0, 0], [0, 0, H]),
  // The parting line between cope and drag.
  path([0, L, H / 2], [0, 0, H / 2], [W, 0, H / 2]),
  path([0, L, H / 2 - 3], [0, 0, H / 2 - 3], [W, 0, H / 2 - 3]),
];
// Ribs on the two outer faces, and the inside of the far walls seen through the opening.
const ribs = [
  ...[W / 3, (2 * W) / 3].map((x) => path([x, 0, 0], [x, 0, H])),
  ...[L / 3, (2 * L) / 3].map((y) => path([0, y, 0], [0, y, H])),
  path([W - T, L - T, H], [W - T, L - T, H - 40]),
  path([T, L - T, H - 40], [W - T, L - T, H - 40], [W - T, T, H - 40]),
  ...[0.3, 0.45, 0.6].map((share) => path([W * share, L - T, H], [W * share, L - T, H - 40])),
];
const pins: Array<[number, number, number]> = [
  [T / 2, L - T / 2, H],
  [W - T / 2, L - T / 2, H],
  [W - T / 2, T / 2 + 34, H],
];

function Pin({ x, y, z }: { x: number; y: number; z: number }) {
  const [cx, cy] = at(x, y, z);
  const top = cy - 14;
  return (
    <path
      d={`M${cx - 6} ${cy}V${top}M${cx + 6} ${cy}V${top}M${cx - 6} ${cy}A6 3 0 0 0 ${cx + 6} ${cy}M${cx - 6} ${top}A6 3 0 1 1 ${cx + 6} ${top}A6 3 0 1 1 ${cx - 6} ${top}`}
      className="fill-landing-band-soft"
    />
  );
}

/** A dimension line beside an edge, with arrows at both ends and its name along it. */
function Dimension({
  from,
  to,
  offset,
  label,
  marker,
}: {
  from: [number, number];
  to: [number, number];
  offset: [number, number];
  label: string;
  marker: string;
}) {
  const [x1, y1] = [from[0] + offset[0], from[1] + offset[1]];
  const [x2, y2] = [to[0] + offset[0], to[1] + offset[1]];
  let angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
  if (angle > 90) angle -= 180;
  if (angle < -90) angle += 180;
  const mx = (x1 + x2) / 2 + offset[0] * 0.75;
  const my = (y1 + y2) / 2 + offset[1] * 0.75;
  return (
    <g>
      <line x1={from[0]} y1={from[1]} x2={x1} y2={y1} strokeWidth={0.6} />
      <line x1={to[0]} y1={to[1]} x2={x2} y2={y2} strokeWidth={0.6} />
      <line x1={x1} y1={y1} x2={x2} y2={y2} markerStart={marker} markerEnd={marker} />
      <text
        x={mx}
        y={my}
        textAnchor="middle"
        dominantBaseline="middle"
        transform={`rotate(${angle.toFixed(1)} ${mx.toFixed(1)} ${my.toFixed(1)})`}
        className="fill-landing-sheet-ink stroke-none font-landing-sans uppercase"
        fontSize="8"
        letterSpacing="1.6"
      >
        {label}
      </text>
    </g>
  );
}

/** The drawing sheet: a moulding box drawn to the customer's dimensions. */
function DrawingSheet() {
  const sheet = homeCustom.sheet;
  const arrow = `arrow${useId().replace(/[^\w-]/g, "")}`;
  const centre = at(W / 2, L / 2, H);
  return (
    <div className="mx-auto w-full max-w-[515px] [transform:rotate(-3deg)] border border-[rgba(70,52,28,0.6)] bg-landing-band-soft px-5.5 pt-5 pb-4.5 text-landing-sheet-ink">
      <div className="flex items-end justify-between border-b border-b-[rgba(70,52,28,0.45)] pb-3 font-landing-sans text-9 leading-[1] tracking-caps-wide uppercase">
        <span>{sheet.header}</span>
        <span>{sheet.badge}</span>
      </div>
      <svg viewBox="0 0 470 290" className="mt-2 w-full" fill="none" aria-hidden="true">
        <defs>
          <marker
            id={arrow}
            viewBox="0 0 10 10"
            refX="9.5"
            refY="5"
            markerWidth="7"
            markerHeight="7"
            orient="auto-start-reverse"
          >
            <path d="M0 1L9.5 5L0 9" fill="none" className="stroke-landing-sheet-line" strokeWidth={1.2} />
          </marker>
        </defs>
        <g className="stroke-landing-sheet-guide" strokeWidth={0.8} strokeDasharray="4 4">
          <line x1={centre[0]} y1="4" x2={centre[0]} y2="286" />
          <line x1="40" y1={centre[1] + 52} x2="450" y2={centre[1] + 40} />
        </g>
        <g className="stroke-landing-sheet-line" strokeWidth={1}>
          {outline.map((d) => (
            <path key={d} d={d} />
          ))}
          {ribs.map((d) => (
            <path key={d} d={d} strokeWidth={0.8} />
          ))}
          {pins.map(([x, y, z]) => (
            <Pin key={`${x}-${y}`} x={x} y={y} z={z} />
          ))}
          <Dimension
            from={at(0, L, 0)}
            to={at(0, 0, 0)}
            offset={[-11, 19]}
            label={sheet.length}
            marker={`url(#${arrow})`}
          />
          <Dimension
            from={at(0, 0, 0)}
            to={at(W, 0, 0)}
            offset={[11, 19]}
            label={sheet.width}
            marker={`url(#${arrow})`}
          />
          <Dimension
            from={at(0, L, 0)}
            to={at(0, L, H)}
            offset={[-24, 0]}
            label={sheet.height}
            marker={`url(#${arrow})`}
          />
        </g>
      </svg>
      <div className="mt-2 flex items-center justify-between border-t border-t-[rgba(70,52,28,0.45)] pt-3.5 font-landing-sans text-9 leading-[1] tracking-caps-wide uppercase">
        <span>{sheet.footer}</span>
        <ArrowUpRight />
      </div>
    </div>
  );
}

/** "03 / Custom manufacturing": building to the customer's drawings. */
export function CustomSection() {
  return (
    <section className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-x-10 gap-y-14 bg-landing-band px-landing-gutter pt-18 pb-16 text-landing-ink upto-900:grid-cols-[minmax(0,1fr)]">
      <div>
        <Eyebrow>{homeCustom.eyebrow}</Eyebrow>
        <h2 className={`mt-8 ${sectionTitle}`}>
          <TitleText title={homeCustom.title} accentClass="text-landing-emphasis-warm" />
        </h2>
        <p className="mt-7 font-landing-sans text-13 leading-[21px] text-landing-band-ink">
          {homeCustom.lines[0]}
          <br />
          {homeCustom.lines[1]}
        </p>
        <PillLink to={homeCustom.action.to} tone="dark" className="mt-8">
          {homeCustom.action.label}
        </PillLink>
        <ul className="mt-10 flex list-none flex-wrap gap-x-5 gap-y-2 font-landing-sans text-9 leading-[1] tracking-caps-wide text-landing-band-ink-soft uppercase">
          {homeCustom.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <DrawingSheet />
    </section>
  );
}
