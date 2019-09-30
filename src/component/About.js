import React, { Component } from 'react';

/* the main page for the about route of this app */
export default class About extends Component {
  render() {
    return (
      <div id="about-flex" className="flex">
        <div id="about-map-container">
          <img
            alt="Map"
            src="./assets/BunBunMap.png"
          />
          <p>
            Now serving
            <span className="normal">metropolitan Pittsburgh and surrounding areas.</span>
          </p>
          <p>
            To ensure freshness, currently we only ship within 1-day driving distance of our bakery.
          </p>
        </div>
        <div id="about-info-container">
          <div id="about-info">
            <div id="home-title-container">
              <div className="title">Bun Bun</div>
              <div className="subtitle">Bake Shop</div>
            </div>

            <p>
              <span className="red normal">Bun Bun Bake Shop</span>
              is a local bakery in
              <span className="normal">Pittsburgh, PA</span>
              .
              All our buns are baked fresh on-site, and can be delivered to you!
            </p>

            <p className="center">
              <span className="normal">Hours</span>
              <br />
              <span className="red">7am - 6pm</span>
              Mon - Fri
              <br />
              <span className="red">7am - 4pm</span>
              Sat
              <br />
              <span className="red">9am - 4pm</span>
              Sun
              <br />
            </p>

            <p className="center">
              <span className="normal">Contact</span>
              <br />
              <span className="red">contact</span>
              @bunbun.com
              <br />
              <span className="red">(412)-555-3829</span>
              <br />
              <span className="red">217 Atwood St</span>
              , Pittsburgh, PA
              <br />
            </p>
          </div>
        </div>
        <div id="about-image" />
      </div>
    );
  }
}
