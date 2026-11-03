import { Eyebrow, TitleText, sectionTitle } from "~/components/site/parts";
import { profile } from "~/content/about";

/** The company profile on the dark band: what B.P. Engineers does, point by point. */
export function ProfileSection() {
  return (
    <section className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] gap-x-16 gap-y-10 bg-landing-dark px-landing-gutter pt-18 pb-20 text-landing-on-dark upto-900:grid-cols-[minmax(0,1fr)]">
      <div>
        <Eyebrow className="text-landing-on-dark-muted">{profile.eyebrow}</Eyebrow>
        <h2 className={`mt-8 ${sectionTitle}`}>
          <TitleText title={profile.title} accentClass="text-landing-emphasis-on-dark" />
        </h2>
      </div>
      <ol className="grid list-none grid-cols-[repeat(2,minmax(0,1fr))] gap-x-10 self-end upto-600:grid-cols-[minmax(0,1fr)]">
        {profile.points.map((point, index) => (
          <li
            key={point}
            className="flex gap-4 border-t border-t-landing-on-dark-line py-5 font-landing-sans text-13 leading-[21px] text-landing-on-dark-soft [&:nth-last-child(-n+2)]:border-b [&:nth-last-child(-n+2)]:border-b-landing-on-dark-line upto-600:[&:nth-last-child(2)]:border-b-0"
          >
            <span className="w-5 shrink-0 pt-0.5 text-9 leading-[1.6] text-landing-on-dark-faint">
              {String(index + 1).padStart(2, "0")}
            </span>
            {point}
          </li>
        ))}
      </ol>
    </section>
  );
}
