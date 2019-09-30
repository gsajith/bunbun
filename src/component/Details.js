import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SegmentedButtonLayout from './SegmentedButtonLayout';

const convertToDollarString = (value) => `$${value.toFixed(2)}`;

/* The details page for each product */
export default class Details extends Component {
  constructor(props) {
    super(props);
    this.countClicked = this.countClicked.bind(this);
    this.glazeClicked = this.glazeClicked.bind(this);
    this.counts = ['1', '3', '6', '12'];
    this.countStrings = ['one', 'three', 'six', 'twelve'];
    this.glazes = ['None', 'Sugar-milk', 'Vanilla-milk', 'Double-chocolate'];
    this.state = {
      countSelected: 0,
      glazeSelected: 1,
    };
  }

  countClicked(index) {
    this.setState({ countSelected: index });
  }

  glazeClicked(index) {
    this.setState({ glazeSelected: index });
  }

  render() {
    const { handleClose, item, handleCartAdd } = this.props;
    const { countSelected, glazeSelected } = this.state;
    return (
      <div id="details-popup">
        <div
          className="flex-item-full"
          onClick={handleClose}
          onKeyPress={handleClose}
          role="button"
          tabIndex={0}
        >
          X
        </div>
        <div className="flex-item-half">
          <img src={item.props.img} alt={item.props.name} />
          <div className="description">{item.props.description}</div>
        </div>
        <div className="flex-item-half">
          <span className="item-name">{item.props.name}</span>
          <div className="details-input-label">Count</div>
          <div>
            <SegmentedButtonLayout
              buttonTexts={this.counts}
              onClick={this.countClicked}
              selectedButton={countSelected}
            />
          </div>
          <div className="price-label">
            <span
              className="price"
            >
              {`${
                convertToDollarString(
                  item.props.scalingPrice[countSelected]
                + (glazeSelected === 0 ? 0 : 1),
                )}`}
            </span>
            {' per bun'}
          </div>
          <div className="details-input-label glaze-label">Glaze</div>
          <div className="glaze-container">
            <SegmentedButtonLayout
              buttonTexts={this.glazes}
              onClick={this.glazeClicked}
              extraClasses="glaze-input"
              selectedButton={glazeSelected}
            />
          </div>
          <div className="details-input-label">You&apos;re paying</div>
          <div className="details-summary">
            <span className="emphasis">
              {`${
                convertToDollarString(
                  this.counts[countSelected]
                * (item.props.scalingPrice[countSelected]
                + (glazeSelected === 0 ? 0 : 1)),
                )}`}
            </span>
            {' '}
            for
            {' '}
            <span className="emphasis">
              { this.countStrings[countSelected] }
              {' '}
              { countSelected === 0 ? 'bun' : 'buns'}
            </span>
          </div>
          <div
            className="button"
            onClick={handleCartAdd}
            onKeyPress={handleCartAdd}
            role="button"
            tabIndex={0}
          >
            Put this bun in your cart
          </div>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleCartAdd: PropTypes.func.isRequired,
  item: PropTypes.shape({
    props: PropTypes.shape({
      img: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      scalingPrice: PropTypes.arrayOf(PropTypes.number),
    }),
  }),
};

Details.defaultProps = {
  item: null,
};
