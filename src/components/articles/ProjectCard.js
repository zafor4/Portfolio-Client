import React from 'react';
import { baseUrl } from '../../utils/config';
import LinkIcon from '@mui/icons-material/Link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
  // Function to truncate and format the description
  const getFormattedDescription = (description) => {
    // Split the description into words
    const words = description.split(' ');
    let shortDescription = words.slice(0, 30).join(' ');

    // If the original description had more than 30 words, add ellipsis
    if (words.length > 30) {
      shortDescription += '...';
    }

    // Replace **text** with <strong>text</strong> for bold
    // Replace ** with <br /> for new line
    shortDescription = shortDescription
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*\*/g, '<br />');

    return shortDescription;
  };

  return (
    <div className='border rounded p-4 hover:bg-slate-100 shadow'>
      <img
        className='w-16 p-1 rounded-full border-2 border-gray'
        src={`${baseUrl}/project/photo/${props.project._id}`}
        alt={`${props.project.name} thumbnail`}
      />
      <p className='mt-16 font-bold'>{props.project.name}</p>
      {/* Displaying the truncated and formatted description */}
      <p
        className='mt-4'
        dangerouslySetInnerHTML={{ __html: getFormattedDescription(props.project.description) }}
      ></p>
      <Link to={`/projects/${props.project._id}`}>Read More</Link>
      <div className='flex justify-between mt-4'>
        <div>
          <LinkIcon />
          <a target='_blank' className='ms-1 text-sm mr-2' href={props.project.server}>
            server
          </a>
          <LinkIcon />
          <a target='_blank' className='ms-1 text-sm' href={props.project.client}>
            client
          </a>
        </div>
        <div>
          <ArrowOutwardIcon />
          <a target='_blank' className='ms-1 text-sm' href={props.project.preview}>
            preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
