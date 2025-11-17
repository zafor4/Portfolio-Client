import React from "react";
import { connect } from "react-redux";
import { baseUrl } from "../../utils/config";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({
  articles: state.articles,
});

const ArticleSpotlight = ({ articles }) => {
  // Highlighted articles: you already have using highlight=true
  const highlighted = (articles || []).filter(
    (a) => a.highlight === true || a.highlight === "true"
  );

  // Ensure at least 1 article exists
  if (!highlighted.length) {
    return (
      <div className="mt-20 text-gray-600 text-center">
        Spotlight ...
      </div>
    );
  }

  // Pick featured + next two
  const featured = highlighted[0];
  const smallArticles = highlighted.slice(1, 3);

  return (
    <div className="mt-20">
      {/* SECTION TITLE */}
      <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 mb-8">
        Spotlight
      </h2>

      {/* MAIN SPOTLIGHT WRAPPER */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ================= FEATURED LARGE CARD ================= */}
        <Link
          to={`/articles/${featured._id}`}
          className="col-span-2 group rounded-xl overflow-hidden relative shadow-lg"
        >
          <div
            className="h-[420px] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage: `url(${baseUrl}/article/photo/${featured._id})`,
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition">
            <div className="absolute bottom-6 left-6">
              <h3 className="text-3xl text-white font-semibold mb-2">
                {featured.name}
              </h3>
              <p className="text-gray-200 max-w-lg">
                {featured.shortDesc || ""}
              </p>
            </div>
          </div>
        </Link>

        {/* ================= SMALLER SIDE CARDS ================= */}
        <div className="flex flex-col gap-6">
          {smallArticles.map((article) => (
            <Link
              key={article._id}
              to={`/articles/${article._id}`}
              className="block rounded-xl overflow-hidden shadow-md group relative"
            >
              <div
                className="h-[200px] bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${baseUrl}/article/photo/${article._id})`,
                }}
              />

              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition flex items-end">
                <h3 className="text-white text-xl font-semibold p-4">
                  {article.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(ArticleSpotlight);
