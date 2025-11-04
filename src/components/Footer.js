import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
           <div className='container mx-auto px-4 py-10 md:px-20 md:flex justify-between border-t-2 mt-10 '>
           <ul className='flex' >
           <li className='text-sm'><Link to="/about" >About</Link></li> {/* Use Link component */}
                 <li className='ms-4 text-sm'><Link to="/projects" >Projects</Link></li> {/* Use Link component */}
                 <li className='ms-4 text-sm'><Link to="/articles" >Articles</Link></li>
             </ul>
             <p className='pb-4 mt-4 md:mt-0 text-sm text-gray-400'>© 2024 Zafor's portfolio. All rights reserved.</p>
           </div>
  )
}

export default Footer