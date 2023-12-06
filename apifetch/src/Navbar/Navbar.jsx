import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark text-white navbar-expand-lg'>
      <Link to="/" className='navbar-brand'>sathiya</Link>
      <div className='ml-auto'>
        <ul className=' navbar-nav'>
          <li className='nav-list'><Link to="/weather" className='nav-link'>Weather</Link></li>
          <li className='nav-list'><Link to="/table" className='nav-link'>TABLEPAGE</Link></li>
          <li className='nav-list'><Link to="/photo" className='nav-link'>PhotoPagePAGE</Link></li>
          <li className='nav-list'><Link to="/album" className='nav-link'>Album page</Link></li>
          <li className='nav-list'><Link to="/crud" className='nav-link'>CRUD</Link></li>
          <li className='nav-list'><Link to="/searchimage" className='nav-link'>SearchImage</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar