import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import DevicesIcon from "@mui/icons-material/Devices";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import BookIcon from "@mui/icons-material/Book";

const MySkillSection = () => {
  const skills = [
    {
      title: "Programming Languages",
      description:
        "Proficient in JavaScript, TypeScript, C++, Python, and Java.",
      icon: <CodeIcon fontSize="large" />,
    },
    {
      title: "Frontend Development",
      description:
        "Experienced in React, Redux, MUI, Tailwind CSS, and React Native.",
      icon: <DevicesIcon fontSize="large" />,
    },
    {
      title: "Backend Development",
      description: "Skilled with Node.js, Express.js, and building REST APIs.",
      icon: <StorageIcon fontSize="large" />,
    },
    {
      title: "Database Management",
      description: "Hands-on with MongoDB and MySQL for data persistence.",
      icon: <CloudIcon fontSize="large" />,
    },
    {
      title: "DevOps & Cloud",
      description: "Knowledge of Docker, AWS, GitHub Actions, and Terraform.",
      icon: <SettingsApplicationsIcon fontSize="large" />,
    },
    {
      title: "WordPress Development",
      description:
        "Experienced with custom themes, Elementor, and WooCommerce.",
      icon: <BookIcon fontSize="large" />,
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
        I SPECIALIZE IN A RANGE OF <span className="text-yellow-500">💪</span>
        SKILLS
      </h2>
      <p className="text-gray-500 text-sm sm:text-base mb-10">
        Technologies and tools I work with daily
      </p>

      {/* Skill Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="border p-6  rounded-lg"
          >
            <div className="flex items-center justify-center mb-4 text-yellow-500">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
            <p className="text-gray-600 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkillSection;
