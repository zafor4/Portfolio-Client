import React from "react";
import { connect } from "react-redux";
import { baseUrl } from "../../utils/config";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
  };
};

const ArticleCardHome = ({ articles }) => {
  const highlighted = (articles || []).filter(
    (a) => a.highlight === true || a.highlight === "true"
  );

  return (
    <div className="grid grid-cols-1 gap-4">
      {highlighted.map((article) => (
        <Link
          key={article._id}
          to={`/articles/${article._id}`}
          className="block rounded overflow-hidden"
        >
          <div
            className="relative w-full h-48 bg-cover bg-center rounded"
            style={{
              backgroundImage: `url(${baseUrl}/article/photo/${article._id})`,
            }}
          >
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <h3 className="text-white text-xl font-bold p-4">
                {article.name}
              </h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default connect(mapStateToProps)(ArticleCardHome);
