import React from 'react';
import {NavLink} from 'react-router-dom';
export default function Navigation() {
  return (
       
    
      <nav className="navigation">
        <li className="link">
          <NavLink className="rig" to="/">Home</NavLink>
          <NavLink  className="rug" to="errorboundary">Test ErrorBoundary</NavLink>
        </li>
    </nav>
  )
}