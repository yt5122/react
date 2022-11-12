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
        <Link class="nav-link" to="/aboutus">About us <span class="sr-only"></span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contactus">Contact us</Link>
      </li>
      
      <li class="nav-item">
        <a class="nav-link " href="/blog">Blog</a>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/contactdetail/101/raj">contact detail</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/products">Products</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/adddoctor">Add doctor</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/viewdoctor">view  doctor</Link>
      </li>
    </ul>
    
  </div>
</nav>
    </div>
  )

}