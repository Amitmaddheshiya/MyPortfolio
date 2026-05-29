import { motion } from "framer-motion";
import { GitHub, Launch } from "@mui/icons-material";

import { githubProfiles } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const GitHubSection = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Open source and releases</p>
        <h2 className="mt-3 text-[34px] font-black text-white sm:text-[52px]">GitHub profiles.</h2>
      </motion.div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {githubProfiles.map((profile, index) => (
          <motion.a
            key={profile.url}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn("up", "spring", index * 0.1, 0.65)}
            className="group rounded-xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/35"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-slate-950/70">
                <GitHub className="text-white" />
              </div>
              <Launch className="text-slate-500 transition group-hover:text-cyan-200" />
            </div>
            <h3 className="mt-5 text-xl font-black text-white">{profile.name}</h3>
            <p className="mt-2 text-sm text-cyan-100">{profile.role}</p>

            <div className="mt-5 grid grid-cols-7 gap-1">
              {Array.from({ length: 35 }).map((_, cell) => (
                <span
                  key={cell}
                  className={`h-3 rounded-[3px] ${
                    (cell + index) % 5 === 0
                      ? "bg-cyan-300"
                      : (cell + index) % 3 === 0
                        ? "bg-emerald-400/70"
                        : "bg-white/10"
                  }`}
                />
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {profile.focus.map((item) => (
                <span key={item} className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-semibold text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(GitHubSection, "github");
