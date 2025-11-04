import { connect } from "react-redux";
import { baseUrl } from "../../utils/config";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({
  articles: state.articles,
});

const ArticleCardHome = ({ articles }) => {
  const highlighted = (articles || []).filter(
    (a) => a.highlight === true || a.highlight === "true"
  );

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Highlights</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {highlighted.map((article) => (
          <Link
            key={article._id}
            to={`/articles/${article._id}`}
            className="block rounded overflow-hidden"
          >
            <div
              className="relative w-full h-48 bg-cover bg-center rounded group"
              style={{
                backgroundImage: `url(${baseUrl}/article/photo/${article._id})`,
              }}
            >
              {/* Overlay only on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start">
                <h3 className="text-white text-xl font-bold p-4">
                  {article.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(ArticleCardHome);
