import React from 'react'
import { Link , useLocation } from 'react-router-dom';
export default function Navbar() {
  let location = useLocation();
 
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand ms-4" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto me-4">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/" ? "active": ""} me-4`} aria-current="page" to="/">Home</Link>
        </li>
       
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname === "/about" ? "active": ""} me-4`} to="/about">About us</Link>
        </li> <li className="nav-item">
          <Link className='btn btn-primary mx-1' to="/login">Login</Link>
        </li> <li className="nav-item">
          <Link className='btn btn-primary mx-1' to="/signup">Signup</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}
