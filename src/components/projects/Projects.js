import React from 'react'
import Layout from '../Layout'
import { connect } from 'react-redux'
import { baseUrl } from '../../utils/config'
import { Card,CardMedia,CardContent,Typography,CardActions,Button } from '@mui/material'
import ProjectCard from '../articles/ProjectCard'
import Preparation from '../Preparation'

const mapStateToProps=state=>{
  return {
    projects:state.projects
  }
}

const Projects = (props) => {
  

  const projects = props.projects.map(project => (
    <div key={project._id}>
<ProjectCard project={project} />
    </div>
    
  ));
  
  
  return (
   <Layout title='Projects' className='container mx-auto px-4 md:px-20'>
    <Preparation>
    <div className='mt-24 mb-20'>
    <div className='md:w-3/4'>
      <h1 className='text-4xl font-bold'>Things I've made trying to put my dent in the universe</h1>
      <p className='mt-4'>I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.</p>
    </div>
    <div className='grid grid-col-1 gap-8 md:grid-cols-2 my-16'>
{projects}
    </div>
    </div>
    </Preparation>
   </Layout>
  )
}

export default connect(mapStateToProps)(Projects)