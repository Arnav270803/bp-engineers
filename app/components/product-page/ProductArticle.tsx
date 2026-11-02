import { useMemo } from "react";
import { WhatsAppButton } from "~/components/layout/WhatsAppButton";
import { productPageText, productPages, type ProductPage } from "~/content/product-pages";
import { Chapter, bodyText, leadText } from "./Chapter";
import { ChapterNav, type ChapterLink } from "./ChapterNav";
import { ExplodedBoxFigure } from "./ExplodedBoxFigure";
import { FaqList } from "./FaqList";
import { PointList } from "./PointList";
import { ProcessFigure } from "./ProcessFigure";
import { ProductHero } from "./ProductHero";
import { ProductPageFooter } from "./ProductPageFooter";
import { ProductPageHeader } from "./ProductPageHeader";
import { ProductQuote } from "./ProductQuote";
import { QuoteCircle } from "./QuoteCircle";
import { ReasonList } from "./ReasonList";
import { RelatedProducts } from "./RelatedProducts";
import { SizeTables } from "./SizeTables";
import { SpecSheet } from "./SpecSheet";
import { TypeList } from "./TypeList";
import { WhereUsed } from "./WhereUsed";

type ChapterId = "overview" | "types" | "specifications" | "sizes" | "where-used" | "why" | "faq" | "quote";

/** The chapters a page has, numbered in order. Some products have no sizes or "where used". */
function chaptersOf(page: ProductPage): Array<ChapterLink & { id: ChapterId }> {
  const names = productPageText.chapters;
  const list: Array<[ChapterId, string]> = [
    ["overview", names.overview],
    ["types", names.types],
    ["specifications", names.specifications],
  ];
  if (page.sizes) list.push(["sizes", names.sizes]);
  if (page.whereUsed) list.push(["where-used", names.whereUsed]);
  list.push(["why", names.why], ["faq", names.faq], ["quote", names.quote]);
  return list.map(([id, label], index) => ({ id, label, number: String(index + 1).padStart(2, "0") }));
}

/**
 * A whole product page in the editorial design: its own header, the hero,
 * the chapters with the contents list and quote link beside them, the quote
 * form, related products and its own footer.
 */
export function ProductArticle({ page }: { page: ProductPage }) {
  const chapters = useMemo(() => chaptersOf(page), [page]);
  const numberOf = (id: ChapterId) => chapters.find((chapter) => chapter.id === id)?.number ?? "";
  const { overview, types, specs, sizes, whereUsed } = page;
  const names = productPageText.chapters;
  // Figure 01 is the large figure at the top; the others follow in order.
  const processFigure = "02";
  const explodedFigure = overview.process ? "03" : "02";

  return (
    <div className="bg-editorial-surface font-editorial-serif text-editorial-ink">
      <ProductPageHeader />
      <main>
        <ProductHero page={page} total={productPages.length} />

        <div className="grid grid-cols-[19%_minmax(0,1fr)_10.7%] gap-x-[4.6%] px-editorial-gutter upto-900:grid-cols-[minmax(0,1fr)] upto-900:px-5">
          <ChapterNav chapters={chapters} />
          <div className="min-w-0">
            <Chapter
              id="overview"
              number={numberOf("overview")}
              label={names.overview}
              title={overview.title}
              tone="first"
            >
              {overview.lead && <p className={leadText}>{overview.lead}</p>}
              {overview.body?.map((paragraph) => (
                <p key={paragraph} className={bodyText}>
                  {paragraph}
                </p>
              ))}
              {overview.points && <PointList points={overview.points} />}
              {overview.process && <ProcessFigure process={overview.process} number={processFigure} />}
            </Chapter>

            <Chapter id="types" number={numberOf("types")} label={names.types} title={types.title}>
              {types.exploded && <ExplodedBoxFigure figure={types.exploded} number={explodedFigure} />}
              {types.items && <TypeList items={types.items} />}
            </Chapter>

            <Chapter
              id="specifications"
              number={numberOf("specifications")}
              label={names.specifications}
              title={specs.title}
            >
              <SpecSheet specs={specs} />
            </Chapter>

            {sizes && (
              <Chapter id="sizes" number={numberOf("sizes")} label={names.sizes} title={sizes.title}>
                <SizeTables sizes={sizes} />
              </Chapter>
            )}

            {whereUsed && (
              <Chapter id="where-used" number={numberOf("where-used")} label={names.whereUsed}>
                <WhereUsed content={whereUsed} />
              </Chapter>
            )}

            <Chapter
              id="why"
              number={numberOf("why")}
              label={names.why}
              title={productPageText.why}
              tone="dark"
            >
              <ReasonList reasons={page.reasons} />
            </Chapter>

            <Chapter
              id="faq"
              number={numberOf("faq")}
              label={names.faq}
              title={productPageText.faq}
              tone="after-dark"
            >
              <FaqList faqs={page.faqs} />
            </Chapter>
          </div>
          <QuoteCircle />
        </div>

        <ProductQuote page={page} number={numberOf("quote")} />
        <RelatedProducts page={page} />
      </main>
      <ProductPageFooter current={page} />
      <WhatsAppButton />
    </div>
  );
}
