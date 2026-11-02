import type { ProductPage } from "~/content/product-pages";
import { capsHeading } from "./Chapter";

type Sizes = NonNullable<ProductPage["sizes"]>;

const heading = `${capsHeading} border-b border-b-editorial-ink pb-3.5`;
const figure = "text-22 leading-[1.2] tracking-snug";

/** The standard round bushes as a table, and the oval bush sizes as a grid. */
export function SizeTables({ sizes }: { sizes: Sizes }) {
  return (
    <div className="mt-12 grid grid-cols-[minmax(0,1fr)_minmax(0,1.45fr)] gap-x-10 upto-900:grid-cols-[minmax(0,1fr)] upto-900:gap-y-12">
      <div>
        <h3 className={heading}>{sizes.round.heading}</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {sizes.round.columns.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="pt-3.5 pr-3 pb-3 text-left align-bottom font-editorial-sans text-10 leading-[1.4] font-normal tracking-caps text-editorial-muted uppercase"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sizes.round.rows.map((row) => (
              <tr key={row.join("-")} className="border-t border-t-editorial-line">
                {row.map((value, index) => (
                  <td key={index} className={`${figure} py-3.5 pr-3`}>
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3 className={heading}>{sizes.oval.heading}</h3>
        <ul className="grid list-none grid-cols-[repeat(4,minmax(0,1fr))] gap-x-6 upto-600:grid-cols-[repeat(3,minmax(0,1fr))]">
          {sizes.oval.sizes.map(([width, length]) => (
            <li key={`${width}-${length}`} className={`${figure} border-b border-b-editorial-line py-3.5`}>
              {`${width} × ${length}`}
            </li>
          ))}
        </ul>
        <p className="mt-3.5 font-editorial-sans text-10 leading-[1.5] tracking-caps text-editorial-muted uppercase">
          {sizes.oval.note}
        </p>
      </div>
    </div>
  );
}
