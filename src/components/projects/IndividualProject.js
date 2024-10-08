import React, { useEffect } from 'react';
import Layout from '../Layout';
import { useParams } from 'react-router-dom';
import { fetchIndividualProject } from '../../redux/ActionCreaters';
import { connect } from 'react-redux';
import { baseUrl } from '../../utils/config';
import Preparation from '../Preparation';
import LinkIcon from '@mui/icons-material/Link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const mapStateToProps = (state) => {
  return {
    project: state.project,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchIndividualProject: (id) => dispatch(fetchIndividualProject(id)),
  };
};

const IndividualProject = (props) => {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      props.fetchIndividualProject(id);
    }
  }, [id]);

  // Function to replace **text** with bold and ** with newlines
  const formatDescription = (description) => {
    if (!description) return ''; // Fallback if description is undefined
    return description
      .split('**')
      .map((part, index) => (index % 2 === 1 ? `<strong>${part}</strong>` : part))
      .join('<br /><br />');
  };

  return (
    <Layout title={`project/${id}`} className='container mx-auto px-4 md:px-20'>
      <Preparation>
        <div className='mt-20'>
          <img
            className='w-16 p-1 rounded-full border-2 border-gray'
            src={`${baseUrl}/project/photo/${id}`}
            alt={`${props.project.name} thumbnail`}
          />
          <h1 className='font-bold text-4xl mt-4'>{props.project.name}</h1>
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
          <p
            className='mt-4'
            dangerouslySetInnerHTML={{
              __html: formatDescription(props.project.description),
            }}
          ></p>
        </div>
      </Preparation>
    </Layout>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(IndividualProject);
