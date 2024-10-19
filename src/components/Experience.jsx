import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.title}
            className="h-[80%] w-[80%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
        <p
          className="text-[16px] font-semibold text-secondary"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${experience.id}-${index}`} // Use a unique identifier in the key
            className="pl-1 text-[14px] tracking-wider text-white-100"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// PropTypes for validation
ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    date: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired, // Ensure id is required for unique keys
  }).isRequired,
};

const Experience = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <motion.div variants={textVariant()} className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard
              key={`experience-${experience.id}`} // Use a unique identifier for keys
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Experience, "technicalSkills");
