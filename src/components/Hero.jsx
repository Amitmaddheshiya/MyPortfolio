import { motion } from "framer-motion";
import { MailOutline, RocketLaunch } from "@mui/icons-material";

import ParticlesContainer from "./ParticlesContainer";

const stats = [
  ["10+", "Production Systems"],
  ["6+", "Full Stack Applications"],
  ["4+", "Desktop/Mobile Platforms"],
  ["1", "Multi-device Digital Signage Ecosystem"],
];

const Hero = () => {
  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 sm:px-16">
      <ParticlesContainer />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
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

          <h1 className="hero-cartoon-title max-w-5xl leading-[0.98]">
            <span className="hero-word hero-word-building block text-[42px] font-black sm:text-[66px] lg:text-[88px]">
              Building
            </span>
            <span className="mt-1 block text-[30px] sm:text-[46px] lg:text-[60px]">
              <span className="hero-word hero-word-scalable font-light">scalable</span>{" "}
              <span className="hero-word hero-word-fullstack font-black">full-stack</span>{" "}
              <span className="hero-word hero-word-systems font-semibold">systems</span>
            </span>
            <span className="mt-3 block text-[22px] font-black leading-tight sm:text-[36px] lg:text-[48px]">
              <span className="hero-word hero-word-web">web</span>
              <span className="mx-2 text-white/70">+</span>
              <span className="hero-word hero-word-mobile font-light">mobile</span>
              <span className="mx-2 text-white/70">+</span>
              <span className="hero-word hero-word-desktop">desktop</span>
            </span>
            <span className="mt-2 block text-[28px] leading-tight sm:text-[48px] lg:text-[66px]">
              <span className="hero-word hero-word-digital font-light">digital</span>{" "}
              <span className="hero-word hero-word-signage font-black">signage</span>{" "}
              <span className="hero-word hero-word-platforms font-semibold">platforms.</span>
            </span>
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
          <div className="relative mx-auto max-w-[430px] rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.13),rgba(255,255,255,0.035))] p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="absolute -right-4 top-7 hidden rounded-full border border-amber-200/30 bg-amber-300 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-950 shadow-xl shadow-amber-950/30 sm:block">
              MERN
            </div>
            <div className="absolute -left-4 bottom-10 hidden rounded-full border border-emerald-200/30 bg-emerald-300 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-950 shadow-xl shadow-emerald-950/30 sm:block">
              SaaS
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/70">
              <img
                src={`${process.env.PUBLIC_URL}/myprofileimg.jpg`}
                alt="Amit Maddheshiya"
                className="aspect-[4/5] w-full object-cover object-top"
              />
              <div className="border-t border-white/10 bg-slate-950/80 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                  Full Stack Engineer
                </p>
                <p className="mt-2 text-xl font-black text-white">
                  React, Node.js, MongoDB, Electron, React Native
                </p>
              </div>
            </div>
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
