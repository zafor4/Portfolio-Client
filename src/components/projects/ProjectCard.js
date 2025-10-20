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
    <div className="border rounded p-4 hover:bg-slate-100 shadow">
      <img
        className="w-16 p-1 rounded-full border-2 border-gray"
        src={`${baseUrl}/project/photo/${props.project._id}`}
        alt={`${props.project.name} thumbnail`}
      />
      <p className="mt-16 font-bold">{props.project.name}</p>
      {/* Displaying the sanitized full description */}
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{
          __html: cleanQuillHtml(props.project.description),
        }}
      />
      <Link to={`/projects/${props.project._id}`}>Read More</Link>
      <div className="flex justify-between mt-4">
        <div>
          <LinkIcon />
          <a
            target="_blank"
            className="ms-1 text-sm mr-2"
            href={props.project.server}
          >
            server
          </a>
          <LinkIcon />
          <a
            target="_blank"
            className="ms-1 text-sm"
            href={props.project.client}
          >
            client
          </a>
        </div>
        <div>
          <ArrowOutwardIcon />
          <a
            target="_blank"
            className="ms-1 text-sm"
            href={props.project.preview}
          >
            preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
