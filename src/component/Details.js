import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* The details page for each product */
export default class Details extends Component {
  render() {
    const { handleClose, item } = this.props;
    return (
      <div>
        <p>{item.props.name}</p>
        <p>{item.props.price}</p>
        <p>{item.props.description}</p>
        <button key="asdf" onClick={handleClose}>close</button>
      </div>
    );
  }
}

Details.propTypes = {
  handleClose: PropTypes.func.isRequired,
  item: PropTypes.objectOf(PropTypes.func),
};
