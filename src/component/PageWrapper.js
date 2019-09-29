import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Lockup from './Lockup';
import NavLinks from './NavLinks';

export default class PageWrapper extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="flex">
        <div className="header">
          <Lockup />
          <NavLinks />
        </div>
        {children}
      </div>
    );
  }
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
