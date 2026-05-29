import { motion } from "framer-motion";
import { CheckCircleOutline } from "@mui/icons-material";

import { engineeringImpact } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Impact = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Engineering impact</p>
        <h2 className="mt-3 text-[34px] font-black text-white sm:text-[52px]">Systems shipped for business workflows.</h2>
      </motion.div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {engineeringImpact.map((item, index) => (
          <motion.div
            key={item}
            variants={fadeIn("up", "spring", index * 0.06, 0.55)}
            className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-xl"
          >
            <CheckCircleOutline className="mt-1 text-cyan-200" />
            <p className="text-[15px] leading-7 text-slate-200">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Impact, "impact");
