import React, { useEffect } from 'react'
import Home from './home/Home';
import { fetchArticles, fetchProjects, modeCheck, projects } from '../redux/ActionCreaters';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import About from './about/About';
import Projects from './projects/Projects';
import Articles from './articles/Articles';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';
import { authCheck } from '../redux/AuthActionCreaters';
import AdminRoute from '../utils/safeRoutes/AdminRoute';
import AddProject from './admin/AddProject';
import AddArticle from './admin/AddArticle';
import IndividualArticle from './articles/IndividualArticle';


const mapDispatchToProps=dispatch=>{
  return {
    modeCheck:(mode)=>dispatch(modeCheck(mode)),
    authCheck:()=>dispatch(authCheck()),
    fetchProjects:()=>dispatch(fetchProjects()),
    fetchArticles:()=>dispatch(fetchArticles())
  }
}


const Main = (props) => {

  useEffect(()=>{
    const mode=localStorage.getItem('mode')
    props.modeCheck(mode)
  },[])
  useEffect(()=>{
    props.authCheck()
  },[])
  useEffect(()=>props.fetchProjects(),[])
  useEffect(()=>props.fetchArticles(),[])
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/article/:id" element={<IndividualArticle />} />
        
        <Route element={<AdminRoute/>}>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/addProject' element={<AddProject/>}/>
        <Route path='/addArticle' element={<AddArticle/>}/>
        </Route>

      </Routes>
    </div>

  )
}

export default connect(null,mapDispatchToProps)(Main)