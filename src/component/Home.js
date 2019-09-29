import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="flex">
        <div id="home-info-container" className="flex-item-half">
          <div id="home-info">
            <div id="home-title-container">
              <div className="title">Bun Bun</div>
              <div className="subtitle">Bake Shop</div>
            </div>

            <p>
              In Sweden, the country of its presumed origin, the cinnamon roll
              takes the name of kanelbulle. Since 1999,
              Swedish kanelbulle dough typically also contains cardamom
              (powder or buds), giving it a distinctive flavour.
              {' '}
            </p>

            <Link to="/shop">
              <div className="button">
                See our buns
              </div>
            </Link>
          </div>
        </div>

        <div id="home-image" className="flex-item-half" />
      </div>
    );
  }
}
