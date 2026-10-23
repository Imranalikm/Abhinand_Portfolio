import { Link, useParams } from "react-router-dom";
import { m, useScroll, useSpring } from "framer-motion";
import { getAdjacentProject, getProjectBySlug } from "@/data/projects";
import { DetailHeader } from "@/components/project-detail/DetailHeader";
import { HeroMockup } from "@/components/project-detail/HeroMockup";
import { Gallery } from "@/components/project-detail/Gallery";
import { Row } from "@/components/project-detail/Row";
import { Ticker } from "@/components/project-detail/Ticker";
import { DetailFooter } from "@/components/project-detail/DetailFooter";
import { Reveal } from "@/components/project-detail/Reveal";
import { easeOut } from "@/lib/motion";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, useDocumentMeta } from "@/lib/useDocumentMeta";

/** Case-study page for a single portfolio project, rendered entirely from `projects` data. */
export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });
  useDocumentMeta(project ? `${project.title} case study — Abhinandh KP` : DEFAULT_TITLE, project?.overview[0] ?? DEFAULT_DESCRIPTION);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-white text-[#222]">
        <p className="text-[24px]">Project not found.</p>
        <Link to="/" className="text-[16px] underline">
          Back to portfolio
        </Link>
      </div>
    );
  }

  const next = getAdjacentProject(project.slug);

  return (
    <div className="min-h-screen bg-white text-[#222]" style={{ fontFamily: "DM Sans, system-ui, sans-serif" }}>
      {/* Reading-progress bar */}
      <m.div className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-[#222]" style={{ scaleX: progress }} />
      <DetailHeader nextSlug={next?.slug} />

      {/* Hero */}
      <section className="px-4 pt-24 md:px-[50px] md:pt-[119px]">
        <m.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease: easeOut }} className="text-[21px] leading-none text-[#565e6a]">
          {project.date}
        </m.p>

        <m.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: easeOut }} className="my-8 font-['Playfair',Georgia,serif] text-[clamp(44px,8.5vw,120px)] font-normal leading-none text-[#222] md:my-14" style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}>
          {project.title}
        </m.h1>

        <m.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: easeOut }} className="mb-9 flex flex-col gap-6 border-t border-[#e5e5e5] pt-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="mb-1.5 text-[16px] font-light text-black">Proud to work with</p>
            <p className="text-[18px] text-black">{project.client}</p>
          </div>
          <div className="sm:text-right">
            <p className="mb-1.5 text-[16px] font-light text-black">Service</p>
            {project.services.map((s) => (
              <p key={s} className="text-[18px] text-black">
                {s}
              </p>
            ))}
          </div>
        </m.div>

        {/* Transform-only settle (no fade) so the hero image still paints immediately for LCP. */}
        <m.div initial={{ y: 40, scale: 0.97 }} animate={{ y: 0, scale: 1 }} transition={{ duration: 1.1, delay: 0.35, ease: easeOut }} className="max-w-[1340px]">
          <HeroMockup mockup={project.mockup} />
        </m.div>
      </section>

      {/* Overview + problem statement */}
      <section className="flex max-w-[1200px] flex-col gap-10 px-4 py-14 md:gap-[50px] md:px-[50px] md:py-20">
        <Reveal>
          <Row label="Overview">
            {project.overview.map((p, i) => (
              <p key={i} className={i < project.overview.length - 1 ? "mb-3" : undefined}>
                {p}
              </p>
            ))}
          </Row>
        </Reveal>

        <Reveal>
          <Row label="Problem statement" wide>
            {project.problemStatement.map((p, i) => (
              <p key={i} className={i < project.problemStatement.length - 1 ? "mb-3" : undefined}>
                {p}
              </p>
            ))}
          </Row>
        </Reveal>
      </section>

      <Gallery images={project.gallery} />

      {/* Role + tags */}
      <section className="flex max-w-[1440px] flex-col gap-10 px-4 py-14 md:gap-[50px] md:py-20 md:pl-[205px] md:pr-[50px]">
        <Reveal>
          <Row label="My role" wide>
            {project.role.responsibilitiesTitle === null ? (
              <p className="mb-2">{project.role.intro}</p>
            ) : (
              <>
                <p className="mb-3">{project.role.intro}</p>
                <p className="mb-2 font-medium">{project.role.responsibilitiesTitle ?? "Responsibilities"}</p>
              </>
            )}
            <ul className="flex list-disc flex-col gap-1 pl-6">
              {project.role.responsibilities.map((item, i) => (
                <m.li key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.5, delay: i * 0.06, ease: easeOut }}>
                  {item}
                </m.li>
              ))}
            </ul>
          </Row>
        </Reveal>

        <Reveal>
          <Row label="Tags" wide>
            <p>{project.tags.join(project.tagSeparator ?? "  /  ")}</p>
          </Row>
        </Reveal>
      </section>

      <Ticker text="LET'S WORK TOGETHER." />

      <section className="px-4 pt-14 md:px-[50px] md:pt-20">
        <Reveal>
          <p className="max-w-[567px] font-['Playfair',Georgia,serif] text-[32px] font-normal leading-[1.15] text-[#222] md:text-[clamp(36px,4.5vw,60px)] md:leading-[55px]" style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}>
            {project.closingQuote}
          </p>
        </Reveal>
      </section>

      <DetailFooter />
    </div>
  );
}
