import { Link, useParams } from "react-router-dom";
import { ArrowBack, Launch } from "@mui/icons-material";

import { projects } from "../constants";

const caseStudyLabels = [
  ["problem", "Problem Statement"],
  ["useCase", "Business Use Case"],
  ["architecture", "System Architecture"],
  ["stack", "Technical Stack"],
  ["challenges", "Challenges Solved"],
  ["scalability", "Scalability Considerations"],
  ["security", "Security Measures"],
  ["performance", "Performance Optimization"],
  ["future", "Future Improvements"],
];

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="mx-auto min-h-screen max-w-4xl px-6 pt-32 sm:px-16">
        <Link to="/" className="inline-flex items-center gap-2 text-cyan-200">
          <ArrowBack sx={{ fontSize: 18 }} /> Back to portfolio
        </Link>
        <h1 className="mt-8 text-4xl font-black text-white">Project not found.</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 pb-20 pt-28 sm:px-16">
      <Link to="/#work" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-white transition hover:border-cyan-300/40">
        <ArrowBack sx={{ fontSize: 18 }} /> Back to projects
      </Link>

      <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">{project.platform}</p>
          <h1 className="mt-3 text-[42px] font-black leading-tight text-white sm:text-[64px]">{project.name}</h1>
          <div className="mt-4 inline-flex rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-100">
            {project.ownership}
          </div>
          <p className="mt-5 text-[17px] leading-8 text-slate-300">{project.description}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
              >
                {link.label} <Launch sx={{ fontSize: 16 }} />
              </a>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur-xl">
          <img src={project.image} alt={project.name} className="aspect-[16/10] w-full rounded-lg object-cover" />
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[0.65fr_1.35fr]">
        <aside className="space-y-5 rounded-xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl">
          <div>
            <h2 className="text-lg font-black text-white">Technical Stack</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-xs font-semibold text-cyan-100">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-black text-white">Architecture Tags</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.architectureTags.map((tag) => (
                <span key={tag} className="rounded-md border border-white/10 bg-white/[0.05] px-2.5 py-1 text-xs font-medium text-slate-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-black text-white">Core Features</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
              {project.features.map((feature) => (
                <li key={feature}>- {feature}</li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="grid gap-4 md:grid-cols-2">
          {caseStudyLabels.map(([key, label]) => (
            <article key={key} className="rounded-xl border border-white/10 bg-slate-950/45 p-5">
              <h2 className="text-lg font-black text-white">{label}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.caseStudy[key]}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
