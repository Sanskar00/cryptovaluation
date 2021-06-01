import React from "react";
import './searchField.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';




export function Navbar (){
  return( 
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to='/' className="navbar-brand" href="#">Coin Evaluation</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
    <Link to='/about'>
    <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
    </Link>
   
    </ul>
  
  </div>
</nav>)
}
