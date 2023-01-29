
import React from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";


export default function Header11() {

  const mynav = useNavigate();


  const logOut =()=>{
    localStorage.removeItem("user11")
    mynav ('/')
  }

  return (
    <div>
      
      <nav class="navbar navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand " href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
       <Link className="nav-link" to="/">Home </Link>
      </li>

      <li class="nav-item active">
      <Link class="nav-link" to="/register">Register</Link>
      </li>
        
      {/* <li class="nav-item">
      <Link class="nav-link" to="/mylogaut">logaut</Link>
      </li> */}

    </ul>

    <button className="nav-Link LOG-11" onClick={logOut}>LOG OUT</button>
    
  </div>
    </nav>
      </div>
  )
}

{/* <Link className="nav-Link" to="/">Home </Link>

<a className="nav-Link" onClick={logOut}>LOG OUT</a> */}