import React from "react";
import CodeIcon from "@mui/icons-material/Code";
import TerminalIcon from "@mui/icons-material/Terminal";
import BrushIcon from "@mui/icons-material/Brush";
import StorageIcon from "@mui/icons-material/Storage";
import SecurityIcon from "@mui/icons-material/Security";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import LanguageIcon from "@mui/icons-material/Language";

const skills = [
  {
    icon: <CodeIcon className="text-gray-700" fontSize="large" />,
    title: "Programming Languages",
    items: ["C++", "JavaScript", "TypeScript", "Python"],
  },
  {
    icon: <BrushIcon className="text-gray-700" fontSize="large" />,
    title: "Frontend Development",
    items: ["React", "Next.js", "React Native", "Tailwind CSS"],
  },
  {
    icon: <TerminalIcon className="text-gray-700" fontSize="large" />,
    title: "Backend Development",
    items: ["Node.js", "Express.js"],
  },
  {
    icon: <StorageIcon className="text-gray-700" fontSize="large" />,
    title: "Database & Cloud",
    items: ["MongoDB", "MySQL", "Firebase"],
  },
  {
    icon: <LanguageIcon className="text-gray-700" fontSize="large" />,
    title: "WordPress Development",
    items: ["Theme Development", "WooCommerce", "Elementor"],
  },
  {
    icon: <SecurityIcon className="text-gray-700" fontSize="large" />,
    title: "Tools & Version Control",
    items: ["Git", "GitHub", "CI/CD Basics"],
  },
  {
    icon: <SmartToyIcon className="text-gray-700" fontSize="large" />,
    title: "Mobile App Development",
    items: ["React Native", "MapLibre", "Firebase Realtime DB"],
  },
  {
    icon: <WorkspacesIcon className="text-gray-700" fontSize="large" />,
    title: "Collaborative Skills",
    items: [
      "Requirements Analysis",
      "Bug Fixing",
      "Team Collaboration",
      "Code Review",
    ],
  },
];

const SkillCard = () => {
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 items-center">
        <h2 className="text-3xl md:text-[40px]  font-bold ">My Skills</h2>
        <p className="text-lg md:text-xl text-gray-700">
          An overview of the skills I rely on to craft dependable digital
          products — spanning full-stack development, mobile app creation,
          database design, and clean, responsive user interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((cat) => (
          <div
            key={cat.title}
            className="border rounded-lg p-5 shadow-sm h-full"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded bg-gray-50">{cat.icon}</div>
              <h3 className="text-lg font-semibold">{cat.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.items.map((it) => (
                <span
                  key={it}
                  className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
