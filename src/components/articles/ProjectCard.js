import React from 'react'
import { baseUrl } from '../../utils/config'
import LinkIcon from '@mui/icons-material/Link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Link } from 'react-router-dom';

const ProjectCard = (props) => {
    
  return (
    <div className=' border rounded p-4 hover:bg-slate-100 shadow'>
        <img className='w-16 p-1 rounded-full border-2 border-gray' src={`${baseUrl}/project/photo/${props.project._id}`}/>
        <p className='mt-16'>{props.project.name}</p>
        <p className='mt-4'>{props.project.description}</p>
        <Link to={`/projects/${props.project._id}`}>Read More</Link>
<div className='flex justify-between mt-4'>
<div>
<LinkIcon/>
<a target='blank' className='ms-1'  href={props.project.github}>source</a>
</div>
<div>
<ArrowOutwardIcon/>
<a target='blank' className='ms-1' href={props.project.preview}>preview</a>
</div>

</div>
    </div>
  )
}

export default ProjectCard