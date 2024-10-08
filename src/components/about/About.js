import React from 'react'
import Layout from '../Layout'
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram'
import image1 from '../../assets/images/image-3.webp'
import EmailIcon from '@mui/icons-material/Email';
import SkillCard from '../home/SkillCard';
import { Link } from 'react-router-dom';
import Preparation from '../Preparation';

const About = () => {
  return (
    <Layout title='About' className="container mx-auto px-4 md:px-20">
        <Preparation>
<div className='my-20 md:flex '>

    <div className=' md:w-3/4 md:mt-24 mb-8 md:mb-0'>
    <img className='md:hidden rounded mb-8' src={image1}/>
          <h1 className='font-bold text-4xl'> About Zafor Iqbal: Passionate Developer & Architecting Tomorrow's Solutions</h1>
          <p className='mt-8 leading-8'>Zafor Iqbal is a skilled MERN stack web developer from Bangladesh, passionate about creating dynamic and responsive web applications. With a strong foundation in MongoDB, Express.js, React, and Node.js, Zafor is adept at building full-stack solutions that meet modern web standards. His expertise includes not only backend development but also creating intuitive and user-friendly interfaces, ensuring seamless user experiences. Whether working on authentication systems, implementing dark mode features, or optimizing performance, Zafor brings dedication and technical proficiency to every project.</p>

        </div>

        <div className='md:ms-16'>
        <img className='rounded hidden md:block' src={image1}/>
        <div className='mt-4 flex justify-between'>
        <div>
        <Link target='blank' to='https://x.com/zafo17_iqbal?t=7qvbVqjqBOA-ixC9DiDC0g&s=09'><XIcon sx={{marginRight:'12px', fontSize:'18px'}}/></Link>
          <Link target='blank' to='https://www.instagram.com/2416xoy?igsh=MXY0cTU0cmw5Mzdzag=='><InstagramIcon sx={{marginRight:'12px', fontSize:'18px'}}/></Link>
         <Link target='blank' to='https://github.com/zafor4'> <GitHubIcon sx={{marginRight:'12px', fontSize:'18px'}}/></Link>
          <Link target='blank' to='https://www.linkedin.com/in/zaforiqbalxoy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><LinkedInIcon sx={{marginRight:'12px', fontSize:'18px'}}/></Link>
        </div>
        <div>
        <EmailIcon/>
        <a>xoy@gmail.com</a>

        </div>
        </div>
        <div className='mt-8'>
          <SkillCard/>
        </div>
        

        </div>
</div>

</Preparation>


    </Layout>
  )
}

export default About