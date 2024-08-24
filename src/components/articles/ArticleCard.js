import React from 'react';
import { Link } from 'react-router-dom';


const ArticleCard = (props) => {
  const { article } = props;
  
  const formattedDate = new Date(article.createdAt).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
  });

  // Truncate the description to the first 200 characters
  const truncatedDescription = article.description.length > 100
    ? article.description.substring(0, 100) + '...' 
    : article.description;

  return (
    <div className='p-2 hover:bg-slate-100 rounded'>
        <p className='py-2 text-sm text-gray-400'>{formattedDate}</p> {/* Render formatted date */}
        <h5 className='py-2 font-bold'>{article.name}</h5>
        <p className='py-2'>{truncatedDescription}</p> {/* Render truncated description */}
        <Link className='text-purple-400 text-sm' to={`/articles/${article._id}`}>Read More</Link>
    </div>
  );
}

export default ArticleCard;
