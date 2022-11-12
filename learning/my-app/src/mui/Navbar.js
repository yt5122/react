import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/viewtutorials">View </Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/addtutorial">ADD </Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/material1">material</Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="/login">LOGIN</Link>
      </li>
      
     
    </ul>
    
  </div>
</nav>
    </div>
  )
}