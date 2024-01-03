import React from "react";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
const Nav=()=>{
    const {count}=useSelector(state=> state.counter)
    return(
   <div>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/counter">Counter {count>0 && <span>({count})</span>}</Link>

      </div>
    </div>
  </div>
</nav>
   </div>
    )
}
export default Nav;