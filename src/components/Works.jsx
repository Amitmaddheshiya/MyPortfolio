import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowForward, Launch } from "@mui/icons-material";

import { projects, smallerProjects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, project }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.article
      variants={fadeIn("up", "spring", index * 0.08, 0.75)}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.085]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
        {!loaded && <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900" />}
        <img
          src={project.image}
          alt={project.name}
          onLoad={() => setLoaded(true)}
          className={`h-full w-full object-contain p-2 transition duration-700 group-hover:scale-[1.02] ${loaded ? "opacity-100" : "opacity-0"}`}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 text-xs font-bold text-cyan-100 backdrop-blur">
          {project.platform}
        </div>
        <div className="absolute bottom-4 left-4 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1 text-xs font-bold text-emerald-100 backdrop-blur">
          {project.ownership}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-2xl font-black text-white">{project.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-xs font-semibold text-cyan-100">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.architectureTags.map((tag) => (
            <span key={tag} className="rounded-md border border-white/10 bg-white/[0.05] px-2.5 py-1 text-xs font-medium text-slate-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
          >
            Case Study <ArrowForward sx={{ fontSize: 17 }} />
          </Link>
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-bold text-white transition hover:border-cyan-300/45 hover:bg-cyan-300/10"
            >
              {link.label} <Launch sx={{ fontSize: 16 }} />
            </a>
          ))}
        </div>
      </div>
    </motion.article>
  );
};

ProjectCard.propTypes = {
  index: PropTypes.number.isRequired,
  project: PropTypes.shape({
    architectureTags: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    ownership: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    tech: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

const Works = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Production systems</p>
        <h2 className="mt-3 text-[34px] font-black text-white sm:text-[52px]">Engineering showcase.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 max-w-4xl text-[17px] leading-8 text-slate-300"
      >
        Each project is presented as a real system: the business problem, platform surface, architecture style, technical stack, and delivery artifact. Some systems were built for my current company, MitPix was built for my own business, and this portfolio was built as my personal engineering brand.
      </motion.p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} index={index} project={project} />
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-white/10 bg-slate-950/45 p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
              More real builds
            </p>
            <h3 className="mt-2 text-2xl font-black text-white">
              Smaller projects that strengthened product execution.
            </h3>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            Alongside large systems, I have shipped multiple responsive web projects and API-based utilities.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {smallerProjects.map((project) => (
            <article key={project.name} className="rounded-lg border border-white/10 bg-white/[0.05] p-4">
              <h4 className="text-lg font-bold text-white">{project.name}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-300">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-2 py-1 text-[11px] font-bold text-cyan-100">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");
