import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

/* Navigation links */
export default class NavLinks extends Component {
  render() {
    return (
      <>
        <NavLink activeClassName="active-header-item" exact to="/bunbun"><div className="header-item">Home</div></NavLink>
        <NavLink activeClassName="active-header-item" to="/bunbun/shop"><div className="header-item">Shop</div></NavLink>
        <NavLink activeClassName="active-header-item" to="/bunbun/catering"><div className="header-item">Catering</div></NavLink>
        <NavLink activeClassName="active-header-item" to="/bunbun/about"><div className="header-item">About</div></NavLink>
        <NavLink activeClassName="active-header-item" to="/bunbun/cart"><div className="header-item">Cart</div></NavLink>
      </>
    );
  }
}
