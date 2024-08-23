import React, { useEffect } from 'react'
import Layout from '../Layout'
import { useParams } from 'react-router-dom';
import { fetchIndividualProject } from '../../redux/ActionCreaters';
import { connect } from 'react-redux';
import { baseUrl } from '../../utils/config';


const mapStateToProps=state=>{
  return {
      project:state.project
  }
}

const mapDispatchToProps=dispatch=>{
  return {
      fetchIndividualProject:(id)=>dispatch(fetchIndividualProject(id))
  }
}

const IndividualProject = (props) => {
  const { id } = useParams();
  useEffect(()=>{
    if (id){
        props.fetchIndividualProject(id)
    }
},[id])

  return (
    <Layout title={`project/${id}`} className='container mx-auto px-4 md:px-20'>
        <div className='mt-14'>
          <img className='w-16 p-1 rounded-full border-2 border-gray' src={`${baseUrl}/project/photo/${id}`}/>
          <h1 className='font-bold text-4xl mt-4'>{props.project.name}</h1>
          <p className='mt-4'>{props.project.description}</p>
        </div>
    </Layout>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(IndividualProject)