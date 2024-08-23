import React,{Children, useEffect} from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom'

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



        <div className='container mx-auto px-4 md:px-20 flex justify-between border-t-2 pt-10 pb-10'>
        <ul className='flex' >
        <li className='text-sm'><Link to="/about" >About</Link></li> {/* Use Link component */}
              <li className='ms-4 text-sm'><Link to="/projects" >Projects</Link></li> {/* Use Link component */}
              <li className='ms-4 text-sm'><Link to="/articles" >Articles</Link></li>
          </ul>
          <p className='pb-4 text-sm text-gray-400'>© 2024 Zafor's portfolio. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Layout