import React from 'react'
import Layout from '../Layout'
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import image from '../../assets/images/PXL_20220308_181126701.jpg'
import { connect } from 'react-redux';
import image2 from '../../assets/images/image-2.webp'
import image3 from '../../assets/images/image-3.webp'
import image4 from '../../assets/images/image-4.webp'
import image5 from '../../assets/images/image-5.webp'
import ArticleCard from '../articles/ArticleCard';
import EmailIcon from '@mui/icons-material/Email';
import { Button, TextField } from '@mui/material';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import { Link } from 'react-router-dom';


const mapStateToProps=state=>{
  return {
    projects:state.projects,
    articles:state.articles
  }
}

const Home = (props) => {


const articles=props.articles.map(article=><div key={article._id}><ArticleCard article={article}/></div>)

  return (
<Layout title='Home' className='container mx-auto px-4 md:px-20'>
    <div>

      <div className='md:w-3/4'>
        <h1 className='font-bold text-4xl py-4 leading-10'>Full-Stack Software Engineer | Well trained at MERN Stack | Problem Solver</h1>
        <p className='leading-8'>Hi! I'm a software engineer with expertise in the MERN stack, focused on building efficient web applications. I'm passionate about solving complex problems and creating impactful software.</p>
        <div className='mt-4'>
          <Link to=''><XIcon sx={{marginRight:'12px', fontSize:'18px'}}/></Link>
          <Link to=''><InstagramIcon sx={{marginRight:'12px', fontSize:'18px'}}/></Link>
         <Link to='https://github.com/zafor4'> <GitHubIcon sx={{marginRight:'12px', fontSize:'18px'}}/></Link>
          <Link to=''><LinkedInIcon sx={{marginRight:'12px', fontSize:'18px'}}/></Link>
        </div>
</div>


<div className='grid grid-cols-2 gap-2 my-8 md:grid-cols-4'>
  <img className='h-32 md:h-44 rounded' src={image2}/>
  <img className='h-32 md:h-44 rounded' src={image3}/>
  <img className='h-32 md:h-44 rounded w-44 md:w-72' src={image4}/>
  <img className='h-32 md:h-44 rounded' src={image5}/>

</div>


<div className='my-8'>
{articles}


<div className='my-8 border rounded p-4'>
  <div className='flex'>
  <EmailIcon/>
  <p className='ms-2'>Stay up to date</p>
  </div>
  <div className='flex mt-2'>
    <TextField fullWidth placeholder='Email Adress'/>
    <Button sx={{marginLeft:'6px', background:'black'}}  variant='contained' >Send</Button>
  </div>
</div>



{/* skill starts here */}
<div className='border rounded p-4'>
<div className='flex'>
<RunCircleIcon/>
<p className='ms-2'>Skills</p>
</div>


</div>

{/* skill ends here */}


</div>



    </div>
</Layout>
  )
}

export default connect(mapStateToProps)(Home)