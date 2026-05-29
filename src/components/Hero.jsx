import { motion } from "framer-motion";
import { Code, MailOutline, RocketLaunch } from "@mui/icons-material";

import ParticlesContainer from "./ParticlesContainer";

const stats = [
  ["10+", "Production Systems"],
  ["6+", "Full Stack Applications"],
  ["4+", "Desktop/Mobile Platforms"],
  ["1", "Multi-device Digital Signage Ecosystem"],
];

const surfaces = ["Web dashboards", "Mobile apps", "Desktop utilities", "Android TV players"];

const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 sm:px-16">
      <ParticlesContainer />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur">
            <RocketLaunch sx={{ fontSize: 17 }} />
            Full Stack Engineer | Product Engineer | Software Engineer
          </div>

          <h1 className="max-w-5xl text-[40px] font-black leading-[1.02] text-white sm:text-[62px] lg:text-[78px]">
            Building scalable systems across web, mobile, desktop, and TV platforms.
          </h1>

          <p className="mt-6 max-w-3xl text-[16px] leading-8 text-slate-300 sm:text-[19px]">
            I design and ship production-grade business applications with React, React Native, Electron, Node.js, Express, and MongoDB. My work focuses on real operational systems: payroll, HR automation, booking SaaS, device control, and distributed media delivery.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-lg bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              <MailOutline sx={{ fontSize: 18 }} /> Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative z-10"
        >
          <div className="rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.1),rgba(15,23,42,0.62))] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  Engineering scope
                </p>
                <h2 className="mt-2 text-2xl font-black text-white">
                  Product systems, not portfolio samples.
                </h2>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10">
                <Code className="text-cyan-100" />
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {surfaces.map((surface) => (
                <div key={surface} className="rounded-xl border border-white/10 bg-slate-950/45 p-4">
                  <p className="text-sm font-bold text-slate-100">{surface}</p>
                  <p className="mt-1 text-xs text-slate-400">Production delivery surface</p>
                </div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              {stats.map(([value, label], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.08 }}
                  className="rounded-xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur"
                >
                  <p className="text-3xl font-black text-cyan-200">{value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase text-slate-400">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
