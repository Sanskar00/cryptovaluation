import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './searchField.css'
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
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>

      </li>
   
    </ul>
  
  </div>
  {/* <input
     className="search "
     type='searchField'
     placeholder={placeholder} 
     onChange={handleChange}
    /> */}
</nav>)
}
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//   <Link to='/' className="navbar-brand" href="#">Coin Evaluation</Link>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNavDropdown">
//     <ul className="navbar-nav">
//     <Link >
//       <li className="nav-item active">
//         <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//     </Link>
//     <Link to='/about'>
//     <li className="nav-item">
//         <a className="nav-link" href="#">About</a>
//       </li>
//     </Link>
      
//       <li className="nav-item">
//         <a className="nav-link" href="#">Pricing</a>
//       </li>
//       <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown link
//         </a>
//         <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//           <a className="dropdown-item" href="#">Action</a>
//           <a className="dropdown-item" href="#">Another action</a>
//           <a className="dropdown-item" href="#">Something else here</a>
//         </div>

//       </li>
   
//     </ul>
  
//   </div>
//   <input
//      className="search "
//      type='searchField'
//      placeholder={placeholder} 
//      onChange={handleChange}
//     />
// </nav>
// );