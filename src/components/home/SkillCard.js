import React from 'react';
import RunCircleIcon from '@mui/icons-material/RunCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import proglang from '../../assets/images/code.png'
import front from '../../assets/images/front-end.png'
import back from '../../assets/images/api.png'
import git from '../../assets/images/git.png'
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

const SkillCard = () => {
  const skills = [
    { name: 'Languages: ',value:'C++, Javascript, Python, Java' , img:proglang,},
    { name: 'Frontend: ',value:'reactjs, redux, mui, tailwindcss', img:front,  },
    {name:'backend: ',value:'nodejs, expressjs, mongoDB',img:back},
    {name:'other: ',value:'git & github, Docker', img:git}
  ];

  return (
    <div className='border rounded p-4'>
      <div className='flex'>
        <RunCircleIcon />
        <p className='ms-2'>Skills</p>
      </div>

      <div className='mt-4'>
        {skills.map(skill => (
          <div key={skill.name}>
            <div className='flex justify-between border rounded text-center items-center shadow p-2 my-4'>
<div className='flex items-center text-center'> 
  <img src={skill.img} className='h-6 rounded-full'/>
  <p className='ms-2 text-sm'>{skill.name}</p>
  </div>
            <p style={{fontSize:'12px'}}>{skill.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='text-center pt-1'>
      <Button
        variant="outlined"
        color='inherit'
        startIcon={<DownloadIcon />}
        href="/MyCV.pdf" // Path to your CV file in the public directory
        download="Zafor_Iqbal_CV.pdf" // Suggested filename for download
      >
        Download CV
      </Button>
    </div>
      </div>
  );
}

export default SkillCard;
