import React,{Children, useEffect} from 'react'
import Menu from './Menu'

const Layout = ({title='Title',className,children}) => {

    useEffect(()=>{
        document.title=title
    },[])
  return (
    <div>
        <div className='container mx-auto px-4 md:px-20'>
            <Menu/>
        </div>
        <div className={className}>
            {children}
        </div>



        <div className='text-center container mx-auto px-4 md:px-20'>
        <ul className='flex justify-center space-x-8 py-4' >
            <li><a href="about">About</a></li>
            <li><a href="projects">Projects</a></li>
            <li><a href="articles">Articles</a></li>
          </ul>
          <p className='pb-4'>copy right</p>
        </div>
    </div>
  )
}

export default Layout