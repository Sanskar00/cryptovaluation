import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './searchField.css'
import {Link} from 'react-router-dom';
import { SearchField } from "../search-field/search-field";




export function Navbar (){
  return( 
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to='/' className="navbar-brand" href="#">Coin Evaluation</Link>

    <ul className="navbar-nav">
    <Link to='/about'>
    <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
     
    </Link>
    <SearchField/>

    
   
    </ul>
  
</nav>)
}