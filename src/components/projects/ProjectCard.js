import React from "react";
import DOMPurify from "dompurify";
import { baseUrl } from "../../utils/config";
import LinkIcon from "@mui/icons-material/Link";
import { GitHub } from "@mui/icons-material";
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
    <div className="border rounded-lg p-4 hover:shadow-lg md:h-96 flex flex-col">
      <div className="flex flex-col justify-between ">
        <div className="flex justify-between mt-4 w-full items-center ">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-gray-200 p-1"
            src={props.project.photo || `${baseUrl}/project/photo/${props.project._id}`}
            alt={`${props.project.name} thumbnail`}
          />

          <a
            href={props.project.preview}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 text-gray-800 px-2 py-1 rounded hover:bg-gray-200 text-sm shadow inline-flex items-center gap-1"
          >
            <ArrowOutwardIcon style={{ fontSize: 16 }} />
            Preview
          </a>
        </div>

        <p className="mt-3 font-bold text-lg">{props.project.name}</p>
      </div>

      {/* Description area: allow overflow if content is long */}
      <div className="mt-3 text-sm text-gray-600 overflow-hidden flex-1">
        <div
          className="max-h-32  pr-2"
          dangerouslySetInnerHTML={{
            __html: cleanQuillHtml(props.project.description),
          }}
        />
      </div>

      <div className="mt-3 flex items-center justify-between text-sm ">
        <Link
          to={`/projects/${props.project._id}`}
          className="bg-[#0BC1C0] text-black px-3 py-1 rounded hover:bg-[#68d8d8] text-sm shadow"
        >
          Read More
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <GitHub fontSize="small" />
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
            <GitHub fontSize="small" />
            <a
              target="_blank"
              rel="noreferrer"
              className="ms-1 text-sm text-gray-700"
              href={props.project.client}
            >
              client
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
