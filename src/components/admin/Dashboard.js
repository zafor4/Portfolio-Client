import React from 'react';
import Layout from '../Layout';
import { Button,Box, IconButton, Typography } from '@mui/material';
import { logout } from '../../redux/AuthActionCreaters';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteProject } from '../../api/ApiProject';
import { fetchArticles, fetchProjects } from '../../redux/ActionCreaters';
import { deleteArticle } from '../../api/ApiArticle';


const mapStateToProps=state=>{
    return{
        projects:state.projects,
        articles:state.articles,
        token:state.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchArticles:()=>dispatch(fetchArticles()),
        fetchProjects:()=>dispatch(fetchProjects()),
        logout: () => dispatch(logout()),
    };
};

const Dashboard = (props) => {
    const navigate = useNavigate();


    const handleDeleteProject=(id)=>{
        deleteProject(props.token,id)
        .then(res=>props.fetchProjects())
        .catch(err=>console.log(err))
    }

    const handleDeleteArticle=(id)=>{
        deleteArticle(props.token,id)
        .then(res=>props.fetchArticles())
        .catch(err=>console.log(err))
    }



    const projects=props.projects.map(project=><Box sx={{border:'1px solid black',alignItems:"center",display:'flex', justifyContent:"space-between",borderRadius:'2px',marginBottom:'4px',padding:'0 4px 0 4px'}} key={project._id} id={project._id} className='flex'>
        <Typography>{project.name}</Typography>
        <IconButton onClick={()=>handleDeleteProject(project._id)}><DeleteIcon /></IconButton>
    </Box>)
        const articles=props.articles.map(article=><Box sx={{border:'1px solid black',alignItems:"center",display:'flex', justifyContent:"space-between",borderRadius:'2px',marginBottom:'4px',padding:'0 4px 0 4px'}} key={article._id} id={article._id} className='flex'>
            <Typography>{article.name}</Typography>
            <IconButton onClick={()=>handleDeleteArticle(article._id)}><DeleteIcon /></IconButton>
        </Box>)

    return (
        <Layout title='dashboard' className='container mx-auto px-4 md:px-20'>
            <Box sx={{textAlign:'center'}} marginTop={4}>
                <Typography>Your Projects</Typography>
                {projects}
                <Button variant='outlined' onClick={() => navigate('/addProject', { replace: true })}>
                Add Project
            </Button>
            </Box>
            <Box sx={{textAlign:'center'}} marginTop={4}>
                <Typography>Your Articles</Typography>
                {articles}
                <Button variant='outlined' onClick={()=>navigate('/addArticle',{replace:true})}>Add Articles</Button>
            </Box>

            
            <Button variant='outlined' onClick={props.logout}>Logout</Button>
        </Layout>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
