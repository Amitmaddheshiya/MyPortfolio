import { motion } from "framer-motion";
import { Call, Email, GitHub, LinkedIn, NorthEast } from "@mui/icons-material";

import { githubProfiles } from "../constants";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className="pb-6">
      <div className="grid gap-8 overflow-hidden lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          variants={slideIn("left", "tween", 0.1, 0.5)}
          className="rounded-xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Contact</p>
          <h2 className="mt-3 text-[34px] font-black text-white sm:text-[52px]">Let us build a serious product.</h2>
          <p className="mt-5 text-[16px] leading-8 text-slate-300">
            Available for full stack engineering, product architecture, SaaS systems, and multi-platform application work.
          </p>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.1, 0.5)}
          className="rounded-xl border border-white/10 bg-slate-950/45 p-6 sm:p-8"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="tel:+918574700615"
              className="inline-flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.06] p-4 font-bold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              <span className="inline-flex min-w-0 items-center gap-3"><Call /> <span className="break-all">+91 8574700615</span></span>
              <NorthEast sx={{ fontSize: 18 }} />
            </a>
            <a
              href="mailto:amitmaddheshiya999@gmail.com"
              className="inline-flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.06] p-4 font-bold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              <span className="inline-flex min-w-0 items-center gap-3"><Email /> <span className="break-all">amitmaddheshiya999@gmail.com</span></span>
              <NorthEast sx={{ fontSize: 18 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/amit-maddheshiya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.06] p-4 font-bold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              <span className="inline-flex items-center gap-3"><LinkedIn /> LinkedIn</span>
              <NorthEast sx={{ fontSize: 18 }} />
            </a>
            <a
              href={githubProfiles[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.06] p-4 font-bold text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              <span className="inline-flex items-center gap-3"><GitHub /> GitHub</span>
              <NorthEast sx={{ fontSize: 18 }} />
            </a>
          </div>

          <footer className="mt-8 border-t border-white/10 pt-5 text-sm text-slate-400">
            Amit Maddheshiya | Full Stack Engineer | Product Engineer | Software Engineer
          </footer>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
