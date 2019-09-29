import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/* Logo lock up */
export default class Lockup extends Component {
  render() {
    return (
      <div id="lockup">
        <Link to="/"><div className="title">Bun Bun</div></Link>
        <Link to="/"><div className="subtitle">Bake Shop</div></Link>
      </div>
    );
  }
}
