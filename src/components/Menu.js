import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import profile from '../assets/images/PXL_20220308_181126701.jpg';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { Modal, Box, Typography, Button } from '@mui/material';
import { updateMode } from '../redux/ActionCreaters';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    mode: state.mode
  };
}

const mapDispatchToProps = dispatch => {
  return {
    updateMode: () => dispatch(updateMode())
  };
}

const Menu = (props) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <div className='flex items-center pt-5 pb-5'>
      <Link to='/'>
        <img className='w-14 rounded-full border border-black' src={profile} alt='Profile' />
      </Link>
      
      {/* mobile menu */}
      <div className='md:hidden ml-auto'>
        <Button variant="contained" color="primary" sx={{
          background: 'white',
          color: 'black'
        }} onClick={() => setOpen(true)}>
          Menu
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 300,
              bgcolor: 'background.paper',
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
              color: 'black', 
            }}
          >
            <Button
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8
              }}
            >
              &times;
            </Button>
            <Typography variant="h6" component="h2">
              Menu
            </Typography>
            <ul className='space-y-4 mt-4'>
              <li><Link to="/about" onClick={handleClose}>About</Link></li> {/* Use Link component */}
              <li><Link to="/projects" onClick={handleClose}>Projects</Link></li> {/* Use Link component */}
              <li><Link to="/articles" onClick={handleClose}>Articles</Link></li> {/* Use Link component */}
            </ul>
          </Box>
        </Modal>
      </div>

      {/* desktop menu */}
      <div className='hidden md:flex flex-grow justify-center'>
        <div className='flex justify-center border shadow p-1 rounded-md' style={{ width: '300px' }}>
          <ul className='flex space-x-8'>
            <li><Link to="/about">About</Link></li> {/* Use Link component */}
            <li><Link to="/projects">Projects</Link></li> {/* Use Link component */}
            <li><Link to="/articles">Articles</Link></li> {/* Use Link component */}
          </ul>
        </div>
      </div>
      
      <ModeNightIcon sx={{
        marginLeft: '7px'
      }} onClick={props.updateMode} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
