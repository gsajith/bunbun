import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavLinks from './NavLinks';

export default class PageWrapperNoLockup extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="flex">
        <div className="header">
          <NavLinks />
        </div>
        {children}
      </div>
    );
  }
}

PageWrapperNoLockup.propTypes = {
  children: PropTypes.node.isRequired,
};
