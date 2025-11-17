import React from "react";
import { connect } from "react-redux";
import DOMPurify from "dompurify";
import { baseUrl } from "../../utils/config";
import { Link } from "react-router-dom";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

const ProjectCardHome = ({ projects }) => {
  const highlighted = (projects || []).filter(
    (p) => p.highlight === true || p.highlight === "true"
  );

  const cleanQuillHtml = (html) => {
    if (!html) return "";
    const withoutUi = html.replace(/<span class="ql-ui"[^>]*><\/span>/g, "");
    return DOMPurify.sanitize(withoutUi, {
      ALLOWED_TAGS: [
        "b",
        "i",
        "u",
        "strong",
        "em",
        "p",
        "br",
        "ul",
        "ol",
        "li",
        "h1",
        "h2",
        "h3",
        "a",
        "img",
        "blockquote",
        "pre",
        "code",
        "span",
      ],
      ALLOWED_ATTR: ["href", "target", "rel", "src", "alt", "class", "style"],
    });
  };

  console.log(projects)
  return (
    <div className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 items-center">
        <h2 className="text-3xl md:text-[40px]  font-bold ">My Projects</h2>
        <p className="text-lg md:text-xl text-gray-700">
          A snapshot of the work I’ve crafted — from full-stack web platforms to
          mobile solutions designed for real-world use. Each project reflects my
          focus on clean architecture, practical features, and smooth user
          experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {highlighted.map((project, index) => (
          <div
            key={project._id || project.name}
            className="bg-[#f8f8f8] p-10 rounded-sm border transition hover:shadow-sm"
          >
            {/* Number */}
            <div className="flex justify-between mb-4">
              <p className="text-sm font-medium text-gray-500 ">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="text-sm font-medium bg-[#0BC1C0] text-white px-2 py-1 rounded-3xl">
                {project.category}
              </p>
            </div>

            {/* Logo + Name */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={project.photo || `${baseUrl}/project/photo/${project._id}`}
                alt={project.name}
                className="w-12 h-12 rounded object-cover"
              />
              <h3 className="font-semibold text-xl text-gray-900">
                {project.name}
              </h3>
            </div>

            {/* Description */}
            <p
              className="text-gray-600 leading-relaxed mb-6"
              dangerouslySetInnerHTML={{
                __html:
                  cleanQuillHtml(project.description).substring(0, 1000) +
                  "...",
              }}
            />

            {/* Learn More */}
            <Link
              to={`/projects/${project._id}`}
              className="text-sm font-medium text-black inline-flex items-center gap-1 hover:opacity-70"
            >
              Learn More
              <ArrowOutwardIcon style={{ fontSize: 16 }} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(ProjectCardHome);
