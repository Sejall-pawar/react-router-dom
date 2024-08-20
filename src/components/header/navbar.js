import React from 'react'
import "./navbar.css"
import "./../../index.css"
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <div className='header'>
      <h1 className='header-name'>Sports</h1>

      <div className='header-links'>
        <Link to="/" className='nav-name'>Home</Link>
        <Link to="/about" className='nav-name'>About</Link>
        <Link to="/categories" className='nav-name'>Categories</Link>
      </div>
    </div>
  )
}

export default navbar