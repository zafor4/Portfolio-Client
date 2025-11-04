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

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 gap-4">
        {highlighted.map((project) => (
          <div
            key={project._id || project.name}
            className="border rounded p-4 gap-4 items-start relative"
          >
            <div className="flex justify-between w-full items-center mb-4">
              <img
                src={`${baseUrl}/project/photo/${project._id}`}
                alt={project.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <a
                href={project.preview}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 text-gray-800 px-2 py-1 rounded hover:bg-gray-200 text-sm shadow inline-flex items-center gap-1"
              >
                <ArrowOutwardIcon style={{ fontSize: 16 }} />
                Preview
              </a>
            </div>

            <div className="flex-1 pr-20">
              <h3 className="font-bold text-lg">{project.name}</h3>
              <div
                className="mt-2 text-sm text-gray-700"
                dangerouslySetInnerHTML={{
                  __html:
                    cleanQuillHtml(project.description).substring(0, 900) +
                    "...",
                }}
              />
            </div>

            <Link
              to={`/projects/${project._id}`}
              className="absolute bottom-3 right-3 bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 text-sm shadow"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(ProjectCardHome);
