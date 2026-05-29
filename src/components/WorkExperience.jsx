import { motion } from "framer-motion";
import { BusinessCenter, Timeline } from "@mui/icons-material";

import { workExperience } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const WorkExperience = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
          Work experience
        </p>
        <h2 className="mt-3 max-w-4xl text-[32px] font-black leading-tight text-white sm:text-[52px]">
          Full Stack Engineer building production business systems.
        </h2>
      </motion.div>

      <div className="mt-10 grid gap-6">
        {workExperience.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.period}`}
            variants={fadeIn("up", "spring", index * 0.08, 0.65)}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.11),rgba(15,23,42,0.72))] p-5 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-7 lg:grid lg:grid-cols-[0.42fr_1fr] lg:gap-8"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#facc15,#22d3ee,#34d399,#fb7185)]" />
            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">
                <BusinessCenter sx={{ fontSize: 16 }} />
                {item.type}
              </div>
              <h3 className="text-3xl font-black text-white sm:text-4xl">{item.role}</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-amber-200">{item.subtitle}</p>
              <p className="mt-3 text-[15px] font-bold text-slate-200">{item.company}</p>
              <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-400">
                <Timeline sx={{ fontSize: 16 }} />
                {item.period}
              </p>
            </div>

            <ul className="relative mt-6 grid gap-3 text-[15px] leading-7 text-slate-300 lg:mt-0">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="rounded-xl border border-white/10 bg-slate-950/45 p-4 shadow-lg shadow-black/10">
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(WorkExperience, "experience");
