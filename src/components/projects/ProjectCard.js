import React from "react";
import DOMPurify from "dompurify";
import { baseUrl } from "../../utils/config";
import LinkIcon from "@mui/icons-material/Link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
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
    <div className="border rounded-lg p-4 hover:shadow-lg md:h-72">
      <div className="flex flex-col">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-gray-200 p-1"
          src={`${baseUrl}/project/photo/${props.project._id}`}
          alt={`${props.project.name} thumbnail`}
        />
        <p className="mt-3 font-bold text-lg">{props.project.name}</p>
      </div>

      {/* Description area: allow overflow if content is long */}
      <div className="mt-3 text-sm text-gray-600 overflow-hidden flex-1">
        <div
          className="max-h-28 overflow-auto pr-2"
          dangerouslySetInnerHTML={{
            __html: cleanQuillHtml(props.project.description),
          }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-sm">
        <Link
          to={`/projects/${props.project._id}`}
          className="text-blue-600 hover:underline"
        >
          Read More
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <LinkIcon fontSize="small" />
            <a
              target="_blank"
              rel="noreferrer"
              className="ms-1 text-sm mr-2 text-gray-700"
              href={props.project.server}
            >
              server
            </a>
          </div>
          <div className="flex items-center">
            <LinkIcon fontSize="small" />
            <a
              target="_blank"
              rel="noreferrer"
              className="ms-1 text-sm text-gray-700"
              href={props.project.client}
            >
              client
            </a>
          </div>
          <div className="flex items-center">
            <ArrowOutwardIcon fontSize="small" />
            <a
              target="_blank"
              rel="noreferrer"
              className="ms-1 text-sm text-gray-700"
              href={props.project.preview}
            >
              preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
