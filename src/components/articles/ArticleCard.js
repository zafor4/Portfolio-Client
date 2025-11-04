import React from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';


const ArticleCard = (props) => {
  // inside the component (helpers)
  const cleanQuillHtml = (html) => {
    if (!html) return "";

    // remove quill UI spans (sometimes added inside lists)
    const withoutUi = html.replace(/<span class="ql-ui"[^>]*><\/span>/g, "");

    // sanitize and allow common formatting tags and attributes
    const clean = DOMPurify.sanitize(withoutUi, {
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
        "h4",
        "h5",
        "h6",
        "a",
        "img",
        "blockquote",
        "pre",
        "code",
        "span",
      ],
      ALLOWED_ATTR: ["href", "target", "rel", "src", "alt", "class", "style"],
    });

    // Ensure links open safely
    // (DOMPurify leaves hrefs intact; we'll add rel/target in rendered markup if needed)
    return clean;
  };
  const { article } = props;

  const formattedDate = new Date(article.createdAt).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  });

  return (
    <div className="p-2 hover:bg-slate-100 rounded">
      <p className="py-2 text-sm text-gray-400">{formattedDate}</p>{" "}
      {/* Render formatted date */}
      <h5 className="py-2 font-bold">{article.name}</h5>
    
      <div
        className="article-description"
        dangerouslySetInnerHTML={{
          __html: cleanQuillHtml(article.description.substring(0, 200)) + "...",
        }}
      />
      {/* <p className="py-2">{truncatedDescription}</p>{" "} */}
      {/* Render truncated description */}
      <Link className="text-purple-400 text-sm" to={`/articles/${article._id}`}>
        Read More
      </Link>
    </div>
  );
}

export default ArticleCard;
