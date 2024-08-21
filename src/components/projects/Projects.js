import React from 'react'
import Layout from '../Layout'
import { connect } from 'react-redux'
import { baseUrl } from '../../utils/config'
import { Card,CardMedia,CardContent,Typography,CardActions,Button } from '@mui/material'

const mapStateToProps=state=>{
  return {
    projects:state.projects
  }
}

const Projects = (props) => {
  

  const projects = props.projects.map(project => (
    <Card key={project._id} sx={{ maxWidth: 345, marginTop:"40px"}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`${baseUrl}/project/photo/${project._id}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <a href={project.github}>Visit Project</a>
        <a href={project.preview}>Live Preview</a>
      </CardActions>
    </Card>
  ));
  
  
  return (
   <Layout title='Projects' className='container mx-auto px-4 md:px-20'>
    <div className='my-8'>
    <div>
      <h1 className='text-4xl font-bold'>Things I've made trying to put my dent in the universe</h1>
      <p className='mt-4'>I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.</p>
    </div>
    <div className='grid grid-col-1 md:grid-cols-2'>
{projects}
    </div>
    </div>
    
   </Layout>
  )
}

export default connect(mapStateToProps)(Projects)