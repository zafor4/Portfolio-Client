import React, { useState } from 'react';
import Layout from '../Layout';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import image2 from '../../assets/images/image-2.webp';
import image3 from '../../assets/images/image-3.webp';
import image4 from '../../assets/images/image-4.webp';
import image5 from '../../assets/images/image-5.webp';
import ArticleCard from '../articles/ArticleCard';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
import SkillCard from './SkillCard';
import MessageIcon from '@mui/icons-material/Message';
import { connect } from 'react-redux';
import { sendMessage } from '../../api/ApiMessage';
import Preparation from '../Preparation';

const mapStateToProps = (state) => {
  return {
    projects: state.projects,
    articles: state.articles,
  };
};

const Home = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    text: '',
  });
  const [messageSent, setMessageSent] = useState(false); 

  const articles = props.articles.slice(0, 3).map((article) => (
    <div className='mt-8' key={article._id}>
      <ArticleCard article={article} />
    </div>
  ));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSendClick = () => {
    sendMessage(formData)
    .then(res=>{
      setMessageSent(true); // Show success message
        setFormData({ email: '', text: '' }); // Clear inputs
        setTimeout(() => setMessageSent(false), 3000);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  return (
    <Layout title='Home' className='container mx-auto px-4 md:px-20'>
      <Preparation>
      <div className='mt-20'>
        <div className='md:w-3/4'>
          <h1 className='font-bold text-4xl leading-10'>
          Software Engineer | Full-Stack MERN Developer & Software Architecture Enthusiast
          </h1>
          <p className='leading-8 mt-4'>
          Hi there! I’m Zafor, a passionate developer with a strong foundation in the MERN stack, dedicated to crafting efficient and scalable software solutions. I thrive on solving complex problems and designing robust software architectures. With a keen eye for detail and a commitment to quality, I'm always eager to take on new challenges and turn innovative ideas into reality. Let’s build something amazing together!
          </p>
          <div className='mt-4'>
            <Link target='blank' to='https://x.com/zafo17_iqbal?t=7qvbVqjqBOA-ixC9DiDC0g&s=09'>
              <XIcon sx={{ marginRight: '12px', fontSize: '18px' }} />
            </Link>
            <Link target='blank' to='https://www.instagram.com/2416xoy?igsh=MXY0cTU0cmw5Mzdzag=='>
              <InstagramIcon sx={{ marginRight: '12px', fontSize: '18px' }} />
            </Link>
            <Link target='blank' to='https://github.com/zafor4'>
              <GitHubIcon sx={{ marginRight: '12px', fontSize: '18px' }} />
            </Link>
            <Link target='blank' to='https://www.linkedin.com/in/zaforiqbalxoy?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
              <LinkedInIcon sx={{ marginRight: '12px', fontSize: '18px' }} />
            </Link>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-2 mt-16 mb-10 md:grid-cols-4'>
          <img className='h-32 md:h-44 rounded' src={image2} alt='image2' />
          <img className='h-32 md:h-44 rounded' src={image3} alt='image3' />
          <img className='h-32 md:h-44 rounded w-44 md:w-72' src={image4} alt='image4' />
          <img className='h-32 md:h-44 rounded' src={image5} alt='image5' />
        </div>

        <div className='my-8 md:flex justify-between'>
          <div className='md:w-2/4'>{articles}</div>

          <div className='mt-8 md:w-1/2 md:ms-20'>
            <div className='border rounded p-4'>
              <div className='flex'>
                <MessageIcon />
                <p className='ms-2'>Send Message</p>
              </div>
              <div className='mt-2'>
              {messageSent && <p className='text-green-500'>Message sent successfully!</p>}
                <TextField
                  sx={{ paddingRight: '30px' }}
                  id='email'
                  label='Your email'
                  variant='standard'
                  fullWidth
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <div className='flex'>
                  <TextField
                    multiline
                    id='text'
                    label='Type Here'
                    variant='standard'
                    fullWidth
                    name='text'
                    value={formData.text}
                    onChange={handleInputChange}
                  />
                  <SendIcon
                    className='mt-4'
                    onClick={handleSendClick}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <SkillCard />
            </div>
          </div>
        </div>
      </div>
      </Preparation>
    </Layout>
  );
};

export default connect(mapStateToProps)(Home);
