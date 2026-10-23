import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { heroFlourish, portrait } from "@/assets/images";
import hero01Svg from "@/assets/svg/hero-01.svg";
import footer01Svg from "@/assets/svg/footer-01.svg";
import { ResponsiveImage } from "@/components/ResponsiveImage";
import { ArrowMark } from "@/components/icons/ArrowUpRightIcon";
import { LogoMark } from "@/components/icons/LogoMark";
import { SocialIconOutline, SocialIconSolid } from "@/components/icons/SocialIcons";
import { ClientLogosRowPrimary, ClientLogosRowSecondary } from "@/components/sections/ClientLogos";
import { ExpertiseCardBrandingIcon, ExpertiseCardDesignPlanningIcon, ExpertiseCardUserExperienceIcon, ExpertiseCardUserInterfaceIcon } from "@/components/sections/Skills";
import { ABOUT, CLOSING, EXPERIENCE, HERO, PORTFOLIO, SKILLS } from "@/data/home";
import { SITE_INFO } from "@/data/site";
import { easeOut, fadeUp, inViewOnce, staggerContainer } from "@/lib/motion";
import { prefetchProjectDetail } from "@/lib/prefetch";

const SKILL_ICONS = [ExpertiseCardUserExperienceIcon, ExpertiseCardUserInterfaceIcon, ExpertiseCardDesignPlanningIcon, ExpertiseCardBrandingIcon];

const HEADING = "font-['Playfair:Regular',serif] font-normal text-[#d5cdc4]";
const GUTTER = "px-4 sm:px-8 md:px-12";
/** Below-the-fold sections: the browser skips their layout/paint until they approach the viewport. */
const DEFER = "[content-visibility:auto] [contain-intrinsic-size:auto_900px]";

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Small uppercase-ish section label ("About", "Area of expertise") above each heading. */
function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-4 text-[16px] text-[rgba(213,205,196,0.7)]">{children}</p>;
}

function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <m.div initial="hidden" whileInView="show" viewport={inViewOnce} variants={fadeUp} className={className}>
      {children}
    </m.div>
  );
}

function Header() {
  return (
    <header className={`relative flex items-center justify-between py-4 ${GUTTER} text-[16px] text-[#d5cdc4]`}>
      <nav className="flex gap-2" aria-label="Sections">
        <button type="button" onClick={() => scrollToSection("bio")} className="min-h-11 px-2 -ml-2">
          Bio
        </button>
        <button type="button" onClick={() => scrollToSection("work")} className="min-h-11 px-2">
          Portfolio
        </button>
      </nav>
      <Link to="/" aria-label="Home" className="absolute left-1/2 flex size-11 -translate-x-1/2 items-center justify-center">
        <LogoMark />
      </Link>
      <span className="min-h-11 px-2 -mr-2 flex items-center">Blog</span>
    </header>
  );
}

function Hero() {
  const [line1, line2, line3, line4] = HERO.headline;
  const lineAnim = (i: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease: easeOut },
  });
  return (
    // Fills the first screen (minus the header) like the desktop hero: headline on top, blurb + biography row anchored to the bottom.
    <section className={`${GUTTER} flex min-h-[calc(100svh-76px)] flex-col pt-6 pb-10`}>
      <div className="flex flex-1 flex-col justify-center">
        <h1 className={`${HEADING} text-center text-[clamp(42px,12.2vw,100px)] leading-[1.04]`}>
          <m.span {...lineAnim(0)} className="block">
            {line1}
          </m.span>
          <m.span {...lineAnim(1)} className="block">
            {line2}
          </m.span>
          <m.span {...lineAnim(2)} className="block">
            {line3}
          </m.span>
          {/* As on desktop, the mandala sits on the "India" line, to its left. */}
          <m.span {...lineAnim(3)} className="flex items-center justify-center gap-[0.4em]">
            <span aria-hidden className="block w-[0.95em] shrink-0">
              <ResponsiveImage picture={heroFlourish} alt="" sizes="100px" className="block h-auto w-full animate-[rotate-full_120s_linear_infinite] motion-reduce:animate-none" />
            </span>
            {line4}
          </m.span>
        </h1>
      </div>

      <div className="pt-12">
        <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6, ease: easeOut }} className="flex max-w-[460px] items-center gap-4">
          <img src={hero01Svg} alt="" width={44} height={44} className="size-[44px] shrink-0 animate-[rotate-full_14s_linear_infinite] motion-reduce:animate-none" />
          <p className="text-[16px] leading-[1.45] text-[#d5cdc4]">{HERO.blurb}</p>
        </m.div>

        <div className="mt-10 flex items-end justify-between gap-6 border-t border-[rgba(213,205,196,0.2)] pt-6">
          <p className={`${HEADING} text-[clamp(32px,7vw,50px)] leading-[1]`}>
            {HERO.biography[0]}
            <br />
            {HERO.biography[1]}
          </p>
          <div className="flex gap-4">
            <SocialIconOutline />
            <SocialIconSolid />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="bio" className={`${DEFER} ${GUTTER} py-16 scroll-mt-4`}>
      <Eyebrow>About</Eyebrow>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <h2 className={`${HEADING} text-[clamp(36px,8vw,60px)] leading-[1.05]`}>{ABOUT.heading}</h2>
          <div className="mt-8 flex flex-col gap-4 text-[16px] leading-[1.55] text-[#d5cdc4]">
            {ABOUT.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>
        <div className="relative mx-auto w-full max-w-[520px] aspect-[670/718] order-first lg:order-none">
          <ResponsiveImage picture={portrait} alt="Portrait of Abhinandh KP" sizes="(min-width: 1024px) 45vw, (min-width: 560px) 520px, 100vw" className="absolute inset-0 size-full object-cover object-bottom" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent to-black to-[95%]" />
        </div>
      </div>
    </section>
  );
}

function Clients() {
  return (
    <section aria-label="Clients" className={`${DEFER} flex flex-col gap-8 py-12`}>
      <ClientLogosRowPrimary />
      <ClientLogosRowSecondary />
    </section>
  );
}

function Skills() {
  return (
    <section className={`${DEFER} ${GUTTER} py-16`}>
      <Eyebrow>Area of expertise</Eyebrow>
      <Reveal>
        <h2 className={`${HEADING} text-[clamp(36px,8vw,60px)] leading-[1.05] max-w-[640px]`}>{SKILLS.heading}</h2>
      </Reveal>
      <m.ul initial="hidden" whileInView="show" viewport={inViewOnce} variants={staggerContainer(0.1)} className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {SKILLS.cards.map((card, i) => {
          const Icon = SKILL_ICONS[i];
          return (
            <m.li key={card.title} variants={fadeUp} className="flex items-start justify-between gap-6 border-t border-[rgba(213,205,196,0.2)] pt-6">
              <div className="text-[#d5cdc4]">
                <p className="text-[18px] font-bold whitespace-pre-wrap">{card.title}</p>
                <ul className="mt-4 text-[16px] leading-[1.9]">
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              {/* The desktop icon components carry a canvas offset; neutralise it here. */}
              <div aria-hidden className="shrink-0 [&>*]:!ml-0 [&>*]:!mt-0">
                <Icon />
              </div>
            </m.li>
          );
        })}
      </m.ul>
    </section>
  );
}

function Experience() {
  return (
    <section className={`${DEFER} ${GUTTER} py-16`}>
      <Eyebrow>Area of expertise</Eyebrow>
      <Reveal>
        <h2 className={`${HEADING} text-[clamp(36px,8vw,60px)] leading-[1.05] max-w-[640px]`}>{EXPERIENCE.heading}</h2>
        <p className="mt-6 max-w-[626px] text-[16px] leading-[1.55] text-[#d5cdc4]">{EXPERIENCE.intro}</p>
      </Reveal>
      <m.ol initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer(0.12)} className="mt-12 grid gap-10 md:grid-cols-2">
        {EXPERIENCE.timeline.map((entry) => (
          <m.li key={entry.role + entry.date} variants={fadeUp} className="text-[#d5cdc4]">
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
              <p className="text-[18px] font-bold">{entry.role}</p>
              <p className="text-[16px] text-[rgba(213,205,196,0.7)]">{entry.date}</p>
            </div>
            <ul className="mt-4 list-disc pl-6 text-[16px] leading-[1.5]">
              {entry.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </m.li>
        ))}
      </m.ol>
    </section>
  );
}

function ProjectHistory() {
  return (
    <section className={`${DEFER} ${GUTTER} py-16`}>
      <Eyebrow>Area of expertise</Eyebrow>
      <Reveal>
        <h2 className={`${HEADING} text-[clamp(36px,8vw,60px)] leading-[1.05]`}>Professional experience</h2>
      </Reveal>
      <ul className="mt-10 text-[#d5cdc4]">
        {EXPERIENCE.history.map((row, i) => (
          <li key={i} className="flex flex-col gap-1 border-b border-dashed border-[rgba(213,205,196,0.35)] py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <p className="text-[17px] font-bold capitalize">{row.project}</p>
            <p className="text-[16px] capitalize text-[rgba(213,205,196,0.75)] sm:text-right sm:shrink-0">{row.role}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Resume() {
  return (
    <section className={`${DEFER} ${GUTTER} py-10`}>
      <a href="/abhinandh-resume.pdf" download="Abhinandh-Resume.pdf" className="flex items-center justify-between gap-6 rounded-2xl border border-[rgba(213,205,196,0.3)] px-6 py-7 transition-colors active:bg-[rgba(213,205,196,0.06)]">
        <span>
          <span className="block text-[15px] text-[rgba(213,205,196,0.7)]">Resume · PDF</span>
          <span className={`${HEADING} mt-1 block text-[clamp(26px,6vw,40px)] leading-[1.1]`}>Download my resume</span>
        </span>
        <ArrowMark className="size-9 shrink-0 rotate-90" />
      </a>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="work" className={`${DEFER} ${GUTTER} py-16 scroll-mt-4`}>
      <h2 className={`${HEADING} text-[clamp(40px,9vw,60px)] leading-[1]`}>Portfolio</h2>
      <ul className="mt-10 border-t border-[rgba(213,205,196,0.3)]">
        {PORTFOLIO.map((row) => {
          const body = (
            <>
              <span className={`${HEADING} text-[clamp(28px,7vw,50px)] leading-[1.1] w-[2.2em] shrink-0 ${row.slug ? "" : "opacity-70"}`}>{row.index}</span>
              <span className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <span className={`${HEADING} text-[clamp(28px,7vw,50px)] leading-[1.1] ${row.slug ? "" : "opacity-70"}`}>{row.title}</span>
                <span className={`text-[16px] capitalize ${row.slug ? "text-[#d5cdc4]" : "text-[rgba(213,205,196,0.7)]"}`}>{row.tags}</span>
              </span>
              <ArrowMark className={`size-8 shrink-0 ${row.slug ? "" : "opacity-40"}`} />
            </>
          );
          const rowClass = "flex items-center gap-4 border-b border-[rgba(213,205,196,0.3)] py-6";
          return (
            <li key={row.index}>
              {row.slug ? (
                <Link to={`/project/${row.slug}`} onTouchStart={prefetchProjectDetail} onFocus={prefetchProjectDetail} onMouseEnter={prefetchProjectDetail} className={`${rowClass} transition-colors active:bg-[rgba(213,205,196,0.06)]`}>
                  {body}
                </Link>
              ) : (
                <div className={rowClass}>{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Closing() {
  return (
    <section className={`${DEFER} py-16`}>
      <div className="overflow-hidden">
        <div className={`${HEADING} flex w-max gap-6 text-[clamp(40px,10vw,70px)] uppercase leading-[1.2] whitespace-nowrap animate-[ticker_18s_linear_infinite] motion-reduce:animate-none`}>
          {Array.from({ length: 4 }, (_, i) => (
            <span key={i} aria-hidden={i > 0}>
              Let’s work together.
            </span>
          ))}
        </div>
      </div>
      <p className={`${GUTTER} mt-12 ${HEADING} text-[clamp(32px,7vw,60px)] leading-[1.1] max-w-[640px]`}>{CLOSING}</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className={`${DEFER} ${GUTTER} pt-8 pb-12 text-[#d5cdc4]`}>
      <div className="grid gap-10 sm:grid-cols-[auto_1fr_auto] sm:items-end">
        <div>
          <p className="text-[22px] font-medium">Services</p>
          <ul className="mt-4 text-[17px] leading-[1.7]">
            {SITE_INFO.services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-1 text-[18px] font-medium break-all sm:break-normal">
          <a href={`mailto:${SITE_INFO.email}`} className="min-h-11 flex items-center lowercase">
            {SITE_INFO.email}
          </a>
          <a href={`tel:${SITE_INFO.phone.replace(/\s/g, "")}`} className="min-h-11 flex items-center">
            {SITE_INFO.phone}
          </a>
          <p>{SITE_INFO.location}</p>
        </div>
        <img src={footer01Svg} alt="" width={94} height={192} loading="lazy" decoding="async" className="hidden sm:block h-[150px] w-auto" />
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-[rgba(213,205,196,0.2)] pt-6">
        <div className="flex gap-6">
          <SocialIconOutline />
          <SocialIconSolid />
        </div>
        <p className="text-[15px]">{SITE_INFO.copyright}</p>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="min-h-11 text-[18px] underline underline-offset-4">
          Back to top
        </button>
      </div>
    </footer>
  );
}

/** Stacked, flow-layout homepage for viewports under 1280px (phones, tablets, small laptops). Same content as the desktop canvas. */
export function MobileHome() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black font-['DM_Sans',sans-serif] text-[#d5cdc4]">
      <Header />
      <main>
        <Hero />
        <About />
        <Clients />
        <Skills />
        <Experience />
        <ProjectHistory />
        <Resume />
        <Portfolio />
        <Closing />
      </main>
      <Footer />
    </div>
  );
}
