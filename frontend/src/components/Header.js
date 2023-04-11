import React, { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
const Header = () =>{
    return (
      <Fragment>
        <div className="NavBar">
          <div >
            <h3><NavLink className='logo' to='/'>LOGO</NavLink></h3>
          </div>
          <div className='menubar'>
            <ul>
              <li>
                <NavLink className="navlinks" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink className="navlinks" to="/about">About</NavLink>
              </li>
              <li>
                <NavLink className="navlinks" to="/service">Service</NavLink>
              </li>
              <li>
                <NavLink className="navlinks" to="/portfolio">Portfolio</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
}
export default Header;