import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { baseUrl } from "../../utils/config";
import Preparation from "../Preparation";
import DOMPurify from "dompurify";
import { GitHub } from "@mui/icons-material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const mapStateToProps = (state) => ({
  projects: state.projects,
});

const IndividualProject = (props) => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  

  useEffect(() => {
    const foundProject = props.projects.find((p) => p._id === id);
    setProject(foundProject || null);
  }, [id, props.projects]);

  // Clean HTML
  const cleanDescriptionHtml = (html) => {
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

  // 🚀 FIX: early return when project doesn't exist
  if (!project) {
    return (
      <Layout title="Loading" className="container mx-auto px-4 md:px-20">
        <Preparation>
          <div className="mt-20 text-center text-xl font-semibold">
            Loading project...
          </div>
        </Preparation>
      </Layout>
    );
  }

  return (
    <Layout title={project.name} className="container mx-auto px-4 md:px-20">
      <Preparation>
        <div className="mt-20">
          <img
            className="w-16 p-1 rounded-full border-2 border-gray"
            src={project.photo || `${baseUrl}/project/photo/${project._id}`}
            alt={`${project.name} thumbnail`}
          />

          <h1 className="font-bold text-4xl mt-4">{project.name}</h1>

          <div className="flex justify-between mt-4">
            {/* GitHub Links */}
            <div className="flex gap-4">
              {project.server && (
                <div className="flex items-center bg-gray-100 px-2 py-1 rounded hover:bg-gray-200">
                  <GitHub fontSize="small" />
                  <a
                    target="_blank"
                    className="ms-1 text-sm"
                    href={project.server}
                  >
                    server
                  </a>
                </div>
              )}

              {project.client && (
                <div className="flex items-center bg-gray-100 px-2 py-1 rounded hover:bg-gray-200">
                  <GitHub fontSize="small" />
                  <a
                    target="_blank"
                    className="ms-1 text-sm"
                    href={project.client}
                  >
                    client
                  </a>
                </div>
              )}
            </div>

            {/* Preview Button */}
            {project.preview && (
              <div className="flex items-center bg-[#0BC1C0] px-2 py-1 rounded hover:bg-[#68d8d8]">
                <ArrowOutwardIcon />
                <a
                  target="_blank"
                  className="ms-1 text-sm"
                  href={project.preview}
                >
                  preview
                </a>
              </div>
            )}
          </div>

          {/* HTML DESCRIPTION */}
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{
              __html: cleanDescriptionHtml(project.description),
            }}
          />
        </div>
      </Preparation>
    </Layout>
  );
};

export default connect(mapStateToProps)(IndividualProject);
