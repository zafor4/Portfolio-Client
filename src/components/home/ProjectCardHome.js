import React from "react";
import { connect } from "react-redux";
import DOMPurify from "dompurify";
import { baseUrl } from "../../utils/config";
import { Link } from "react-router-dom";

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
    <div className="grid grid-cols-1 gap-4">
      {highlighted.map((project) => (
        <div
          key={project._id || project.name}
          className="border rounded p-4 flex gap-4 items-start"
        >
          <img
            src={`${baseUrl}/project/photo/${project._id}`}
            alt={project.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="font-bold text-lg">{project.name}</h3>
            <div
              className="mt-2 text-sm text-gray-700"
              dangerouslySetInnerHTML={{
                __html: cleanQuillHtml(project.description),
              }}
            />
            <div className="mt-3">
              <Link
                to={`/projects/${project._id}`}
                className="text-purple-500 text-sm"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(ProjectCardHome);
