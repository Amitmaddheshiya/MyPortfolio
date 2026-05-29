import PropTypes from "prop-types";
import { motion } from "framer-motion";

import { services, technologies, tools } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.08, 0.65)}
    className="rounded-xl border border-white/10 bg-white/[0.06] p-5 shadow-xl shadow-black/10 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.09]"
  >
    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-slate-950/60">
      <img src={icon} alt={title} className="h-8 w-8 object-contain" />
    </div>
    <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
    <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
  </motion.div>
);

ServiceCard.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const StackGrid = ({ title, items, compact = false }) => (
  <div className="rounded-xl border border-white/10 bg-slate-950/45 p-5">
    <h3 className="text-lg font-bold text-white">{title}</h3>
    <div
      className={`mt-5 grid gap-3 ${
        compact
          ? "grid-cols-1 xs:grid-cols-2"
          : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
      }`}
    >
      {items.map((item) => (
        <div
          key={item.name}
          className="flex min-h-[58px] min-w-0 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2"
        >
          <img src={item.icon} alt={item.name} className="h-7 w-7 shrink-0 object-contain" />
          <p className="min-w-0 break-words text-[13px] font-semibold leading-5 text-slate-200">{item.name}</p>
        </div>
      ))}
    </div>
  </div>
);

StackGrid.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
  compact: PropTypes.bool,
};

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Engineering profile</p>
        <h2 className="mt-3 text-[34px] font-black text-white sm:text-[52px]">Product-minded full stack systems engineer.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 max-w-4xl text-[17px] leading-8 text-slate-300"
      >
        I build business applications that move beyond UI screens into complete operating systems: authenticated admin panels, mobile workflows, desktop utilities, media players, exports, scheduling engines, and data-backed automation. The portfolio below is structured around product outcomes, architecture decisions, and platform breadth.
      </motion.p>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <StackGrid title="Core Stack" items={technologies} />
        <StackGrid title="Engineering Tools" items={tools} compact />
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
