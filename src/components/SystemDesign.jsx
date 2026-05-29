import { motion } from "framer-motion";
import { Api, Dashboard, Dns, Lock, Storage, Tv } from "@mui/icons-material";

import { systemDesigns } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const icons = [Dashboard, Api, Storage, Dns, Lock, Tv];

const SystemDesign = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">System design showcase</p>
        <h2 className="mt-3 text-[34px] font-black text-white sm:text-[52px]">Architecture thinking, made visible.</h2>
      </motion.div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {systemDesigns.map((system, index) => (
          <motion.article
            key={system.title}
            variants={fadeIn("up", "spring", index * 0.12, 0.7)}
            className="rounded-xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
          >
            <h3 className="text-xl font-black text-white">{system.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{system.summary}</p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {system.nodes.map((node, nodeIndex) => {
                const Icon = icons[nodeIndex % icons.length];
                return (
                  <div key={node} className="rounded-lg border border-white/10 bg-slate-950/50 p-3">
                    <Icon className="text-cyan-200" sx={{ fontSize: 20 }} />
                    <p className="mt-2 text-xs font-bold text-slate-200">{node}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 space-y-2">
              {system.flows.map((flow) => (
                <div key={flow} className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="h-px flex-1 bg-gradient-to-r from-cyan-300/70 to-transparent" />
                  <span>{flow}</span>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(SystemDesign, "systems");
