import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

/* Navigation links */
export default class NavLinks extends Component {
  render() {
    return (
      <>
        <NavLink activeClassName="active-header-item" exact to="/"><div className="header-item">Home</div></NavLink>
        <NavLink activeClassName="active-header-item" to="/shop"><div className="header-item">Shop</div></NavLink>
        <NavLink activeClassName="active-header-item" to="/catering"><div className="header-item">Catering</div></NavLink>
        <NavLink activeClassName="active-header-item" to="/about"><div className="header-item">About</div></NavLink>
        <NavLink activeClassName="active-header-item" to="/cart"><div className="header-item">Cart</div></NavLink>
      </>
    );
  }
}
