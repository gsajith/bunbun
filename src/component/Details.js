import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SegmentedButtonLayout from './SegmentedButtonLayout';

const convertToDollarString = (value) => `$${value.toFixed(2)}`;

/* The details page for each product */
export default class Details extends Component {
  render() {
    const { handleClose, item } = this.props;
    return (
      <div id="details-popup">
        <div className="flex-item-full" onClick={handleClose}>
          X
        </div>
        <div className="flex-item-half">
          <img src={item.props.img} />
          <div className="description">{item.props.description}</div>
        </div>
        <div className="flex-item-half">
          <span className="item-name">{item.props.name}</span>
          <div className="details-input-label">Count</div>
          <div>
            <SegmentedButtonLayout buttonTexts={['1', '3', '6', '12']} />
          </div>
          <div className="details-input-label">Glaze</div>
          <div className="glaze-container">
            <SegmentedButtonLayout buttonTexts={['None', 'Sugar-milk', 'Vanilla-milk', 'Double-chocolate']} extraClasses="glaze-input" />
          </div>
          <div className="button" onClick={handleClose}>Put this bun in your cart</div>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  handleClose: PropTypes.func.isRequired,
  item: PropTypes.objectOf(PropTypes.func),
};
