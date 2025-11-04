import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import profile from '../assets/images/PXL_20220308_181126701.jpg';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { Modal, Box, Typography, Button } from '@mui/material';
import { updateMode } from '../redux/ActionCreaters';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    mode: state.mode,
    user: state.user
  };
}

const mapDispatchToProps = dispatch => {

  console.log("Mapping dispatch to props for Menu component");
  return {
    updateMode: () => dispatch(updateMode())
  };
}

const Menu = (props) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <div className="flex items-center pt-5 pb-5 justify-between">
      <Link to="/">
        <img
          className="w-14 rounded-full border border-black"
          src={profile}
          alt="Profile"
        />
      </Link>

      {/* mobile menu */}
      <div className="md:hidden ml-auto">
        <Button
          variant="contained"
          color="primary"
          sx={{
            background: "white",
            color: "black",
          }}
          onClick={() => setOpen(true)}
        >
          Menu
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
              color: "black",
            }}
          >
            <Button
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
              }}
            >
              &times;
            </Button>
            <Typography variant="h6" component="h2">
              Menu
            </Typography>
            <ul className="space-y-4 mt-4">
              <li>
                <Link to="/about" onClick={handleClose}>
                  About
                </Link>
              </li>{" "}
              {/* Use Link component */}
              <li>
                <Link to="/projects" onClick={handleClose}>
                  Projects
                </Link>
              </li>{" "}
              {/* Use Link component */}
              <li>
                <Link to="/articles" onClick={handleClose}>
                  Articles
                </Link>
              </li>{" "}
              {/* Use Link component */}
              {props.user && props.user.role === "admin" && (
                <li>
                  <Link to="/dashboard" onClick={handleClose}>
                    Dashboard
                  </Link>
                </li>
              )}
              {!props.user && (
                <li>
                  <Link to="/login" onClick={handleClose}>
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </Box>
        </Modal>
      </div>

      <div className="hidden md:flex fixed top-4 left-[540px] justify-center z-50 ">
        <div
          className="flex justify-center border shadow p-1 rounded-md mt-3 mb-3"
          style={{ width: "370px" }}
        >
          <ul className="flex space-x-8">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            {props.user && props.user.role === "admin" && (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            )}
            {!props.user && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>


        <ModeNightIcon
          sx={{
            marginLeft: "7px",
          }}
          onClick={props.updateMode}
        />
  
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
