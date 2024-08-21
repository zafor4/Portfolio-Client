import React from 'react'
import Layout from '../Layout'
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram'
import image1 from '../../assets/images/image-3.webp'

const About = () => {
  return (
    <Layout title='About' className="container mx-auto px-4 md:px-20">
        
<div className='my-8 md:flex '>

    <div className='mt-8 md:mt-0 md:w-3/4'>
    <img className='md:hidden rounded' src={image1}/>
          <h1 className='font-bold text-4xl mt-8'> Hi, I am zafor iqbal .a bangladeshi mern stack web developper</h1>
          <p className='mt-4 text-lg'>Zafor Iqbal is a skilled MERN stack web developer from Bangladesh, passionate about creating dynamic and responsive web applications. With a strong foundation in MongoDB, Express.js, React, and Node.js, Zafor is adept at building full-stack solutions that meet modern web standards. His expertise includes not only backend development but also creating intuitive and user-friendly interfaces, ensuring seamless user experiences. Whether working on authentication systems, implementing dark mode features, or optimizing performance, Zafor brings dedication and technical proficiency to every project.</p>

        </div>

        <div className='mt-8 md:ms-8'>
        <img className='rounded hidden md:block' src={image1}/>
          <div className='flex py-1'>
            <XIcon/>
            <p className='ms-2'>Follow me on x</p>
          </div>
          <div className='flex py-1'>
            <InstagramIcon/>
            <p className='ms-2'>Follow me on Instagram</p>
          </div>
          <div className='flex py-1'>
            <GitHubIcon/>
            <p className='ms-2'>Follow me on GitHub</p>
          </div>
          <div className='flex py-1'>
            <LinkedInIcon/>
            <p className='ms-2'>Follow me on Linkedin</p>
          </div>

        </div>
</div>



    </Layout>
  )
}

export default About