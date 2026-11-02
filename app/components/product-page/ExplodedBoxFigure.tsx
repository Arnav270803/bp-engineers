import { useId } from "react";
import { productPageText, type ProductPage } from "~/content/product-pages";
import { FigureCaption } from "./Chapter";

type Exploded = NonNullable<ProductPage["types"]["exploded"]>;

// Cope, cheek and drag, drawn apart on a 540 by 440 grid. The pins stand on
// the drag; the cope and cheek carry the bushes they enter.
const parts = [
  { y: 40, height: 68, ears: "bottom" },
  { y: 172, height: 48, ears: "bottom" },
  { y: 300, height: 68, ears: "top" },
] as const;
const earTop = (part: (typeof parts)[number]) =>
  part.ears === "bottom" ? part.y + part.height - 16 : part.y;
const pinAxes = [101, 439];

// Numbered callouts: where each sits, and the point on the drawing it names.
const callouts: Array<{ x: number; y: number; from?: [number, number] }> = [
  { x: 500, y: 70, from: [412, 70] },
  { x: 500, y: 190, from: [412, 190] },
  { x: 500, y: 342, from: [412, 342] },
  { x: 38, y: 100, from: [94, 100] },
  { x: 38, y: 272, from: [95, 272] },
  { x: 322, y: 258.5 },
];

/** The exploded drawing of a moulding box, with a legend for its numbered parts. */
export function ExplodedBoxFigure({ figure, number }: { figure: Exploded; number: string }) {
  const id = useId().replace(/[^\w-]/g, "");
  const hatch = `hatch${id}`;
  const arrow = `arrow${id}`;
  return (
    <figure className="mt-13">
      <div className="grid grid-cols-[minmax(0,1.62fr)_minmax(0,1fr)] bg-editorial-panel upto-900:grid-cols-[minmax(0,1fr)]">
        <svg viewBox="0 0 540 440" className="h-auto w-full" fill="none" aria-hidden="true">
          <defs>
            <pattern
              id={hatch}
              patternUnits="userSpaceOnUse"
              width="4"
              height="4"
              patternTransform="rotate(45)"
            >
              <line x1="0" y1="0" x2="0" y2="4" className="stroke-editorial-accent" strokeWidth={1} />
            </pattern>
            <marker
              id={arrow}
              viewBox="0 0 8 8"
              refX="7.5"
              refY="4"
              markerWidth="8"
              markerHeight="8"
              orient="auto-start-reverse"
            >
              <path d="M0 1L8 4L0 7z" className="fill-editorial-ink" />
            </marker>
          </defs>

          <g className="stroke-editorial-subtle" strokeWidth={0.8} strokeDasharray="14 4 3 4">
            {pinAxes.map((x) => (
              <line key={x} x1={x} y1="20" x2={x} y2="408" />
            ))}
          </g>

          <g className="fill-editorial-panel stroke-editorial-ink" strokeWidth={1.4}>
            {parts.map((part) => (
              <g key={part.y}>
                <rect x="128" y={part.y + 7} width="284" height={part.height - 14} />
                <rect x="122" y={part.y} width="296" height="7" />
                <rect x="122" y={part.y + part.height - 7} width="296" height="7" />
                <line x1="222.7" y1={part.y + 7} x2="222.7" y2={part.y + part.height - 7} />
                <line x1="317.3" y1={part.y + 7} x2="317.3" y2={part.y + part.height - 7} />
                <rect x="80" y={earTop(part)} width="42" height="16" />
                <rect x="418" y={earTop(part)} width="42" height="16" />
              </g>
            ))}
          </g>

          {parts
            .filter((part) => part.ears === "bottom")
            .flatMap((part) =>
              pinAxes.map((x) => (
                <rect
                  key={`${part.y}-${x}`}
                  x={x - 7}
                  y={earTop(part) - 3}
                  width="14"
                  height="22"
                  fill={`url(#${hatch})`}
                  className="stroke-editorial-accent"
                  strokeWidth={1.3}
                />
              )),
            )}

          {pinAxes.map((x) => (
            <g key={x} className="fill-editorial-panel stroke-editorial-accent" strokeWidth={1.3}>
              <rect x={x - 9} y="294" width="18" height="6" />
              <rect x={x - 6} y="254" width="12" height="40" />
              <path d={`M${x - 6} 254L${x - 3} 248H${x + 3}L${x + 6} 254`} />
            </g>
          ))}

          <g className="stroke-editorial-ink" strokeWidth={0.8}>
            <line x1="101" y1="380" x2="101" y2="408" />
            <line x1="439" y1="380" x2="439" y2="408" />
            <line
              x1="103"
              y1="400"
              x2="437"
              y2="400"
              markerStart={`url(#${arrow})`}
              markerEnd={`url(#${arrow})`}
            />
            <line x1="270" y1="267" x2="270" y2="297" markerEnd={`url(#${arrow})`} />
          </g>
          <text
            x="270"
            y="393"
            textAnchor="middle"
            className="fill-editorial-ink font-editorial-sans"
            fontSize="9"
            letterSpacing="1.3"
          >
            {figure.dimension}
          </text>

          <g className="fill-editorial-panel stroke-editorial-ink" strokeWidth={1}>
            <rect x="236" y="250" width="68" height="17" />
            <line x1="255" y1="250" x2="255" y2="267" />
            <path d="M240.5 263.5L244.5 253.5H251L247 263.5Z" />
          </g>
          <text
            x="279.5"
            y="262.2"
            textAnchor="middle"
            className="fill-editorial-ink font-editorial-sans"
            fontSize="9.5"
            fontWeight="700"
          >
            {figure.flatness}
          </text>

          {callouts.map((callout, index) => (
            <g key={index}>
              {callout.from && (
                <>
                  <line
                    x1={callout.from[0]}
                    y1={callout.from[1]}
                    x2={callout.from[0] > callout.x ? callout.x + 9.5 : callout.x - 9.5}
                    y2={callout.y}
                    className="stroke-editorial-ink"
                    strokeWidth={0.8}
                  />
                  <circle cx={callout.from[0]} cy={callout.from[1]} r="2" className="fill-editorial-ink" />
                </>
              )}
              <circle
                cx={callout.x}
                cy={callout.y}
                r="9.5"
                className="fill-editorial-panel stroke-editorial-ink"
                strokeWidth={1}
              />
              <text
                x={callout.x}
                y={callout.y + 3.6}
                textAnchor="middle"
                className="fill-editorial-ink font-editorial-sans"
                fontSize="10"
                fontWeight="700"
              >
                {index + 1}
              </text>
            </g>
          ))}
        </svg>

        <ol className="list-none py-8.5 pr-7 pl-1.5 upto-900:px-4.5 upto-900:pt-1 upto-900:pb-4.5">
          {figure.legend.map((item, index) => (
            <li
              key={item.label}
              className="grid grid-cols-[30px_minmax(0,1fr)] border-b border-b-[rgba(32,37,31,0.12)] pt-2.75 pb-3 last:border-b-0"
            >
              <span className="flex size-4.75 items-center justify-center rounded-[50%] border border-editorial-ink font-editorial-sans text-10 leading-[1] font-bold">
                {index + 1}
              </span>
              <div>
                <b className="block font-editorial-heavy text-10 leading-[12px] font-normal tracking-caps-wide uppercase">
                  {item.label}
                </b>
                <span className="mt-1 block text-14 leading-[1.4] text-editorial-ink-soft">{item.text}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <FigureCaption number={number} text={figure.caption} aside={productPageText.notToScale} />
    </figure>
  );
}
