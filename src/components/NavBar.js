import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import { NavLink } from "react-router-dom";
import "./NavBar.css";


const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="appRow mx-auto col-12 col-lg-9 mb-2 d-flex justify-content-end">
      {!isAuthenticated && (
        <button className="boton" onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && (
      <div className="d-flex justify-content-between">
     
      <button className="boton" onClick={() => logout()}>Log out</button>
     <span>
     <button className="boton"><NavLink 
     className="Nav_link" 
     to="/home"
     >Home</NavLink></button>&nbsp;

     <button className="boton"><NavLink  
     className="Nav_link" 
     to="/profile"
     >Profile</NavLink></button>
     </span>
      </div>
      )}
      
    </div>
  );
};

export default NavBar;