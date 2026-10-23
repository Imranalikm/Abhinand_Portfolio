import { Link, useParams } from "react-router-dom";
import { getAdjacentProject, getProjectBySlug } from "@/data/projects";
import { DetailHeader } from "@/components/project-detail/DetailHeader";
import { HeroMockup } from "@/components/project-detail/HeroMockup";
import { Gallery } from "@/components/project-detail/Gallery";
import { Row } from "@/components/project-detail/Row";
import { Ticker } from "@/components/project-detail/Ticker";
import { DetailFooter } from "@/components/project-detail/DetailFooter";

/** Case-study page for a single portfolio project, rendered entirely from `projects` data. */
export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);

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
      <DetailHeader nextSlug={next?.slug} />

      {/* Hero */}
      <section className="px-4 pt-24 md:px-8 xl:px-[50px] xl:pt-[119px]">
        <p className="text-[21px] leading-none text-[#565e6a]">{project.date}</p>

        <h1 className="my-8 font-['Playfair',Georgia,serif] text-[clamp(44px,8.5vw,120px)] font-normal leading-none text-[#222] md:my-14" style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}>
          {project.title}
        </h1>

        <div className="mb-9 flex flex-col gap-6 border-t border-[#e5e5e5] pt-6 sm:flex-row sm:items-start sm:justify-between">
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
        </div>

        <div className="max-w-[1340px]">
          <HeroMockup mockup={project.mockup} />
        </div>
      </section>

      {/* Overview + problem statement */}
      <section className="flex max-w-[1200px] flex-col gap-10 px-4 py-14 md:gap-[50px] md:px-8 md:py-20 xl:px-[50px]">
        <Row label="Overview">
          {project.overview.map((p, i) => (
            <p key={i} className={i < project.overview.length - 1 ? "mb-3" : undefined}>
              {p}
            </p>
          ))}
        </Row>

        <Row label="Problem statement" wide>
          {project.problemStatement.map((p, i) => (
            <p key={i} className={i < project.problemStatement.length - 1 ? "mb-3" : undefined}>
              {p}
            </p>
          ))}
        </Row>
      </section>

      <Gallery images={project.gallery} />

      {/* Role + tags */}
      <section className="flex max-w-[1440px] flex-col gap-10 px-4 py-14 md:gap-[50px] md:px-8 md:py-20 xl:pl-[205px] xl:pr-[50px]">
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
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Row>

        <Row label="Tags" wide>
          <p>{project.tags.join(project.tagSeparator ?? "  /  ")}</p>
        </Row>
      </section>

      <Ticker text="LET'S WORK TOGETHER." />

      <section className="px-4 pt-14 md:px-8 md:pt-20 xl:px-[50px]">
        <p className="max-w-[567px] font-['Playfair',Georgia,serif] text-[clamp(32px,4.5vw,60px)] font-normal leading-[1.15] text-[#222] xl:leading-[55px]" style={{ fontVariationSettings: '"opsz" 12, "wdth" 100' }}>
          {project.closingQuote}
        </p>
      </section>

      <DetailFooter />
    </div>
  );
}
