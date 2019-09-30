import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Card component */
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.cardClicked = this.cardClicked.bind(this);
  }

  cardClicked() {
    const { onClick } = this.props;
    onClick(this);
  }

  render() {
    const {
      img, name, price,
    } = this.props;
    return (
      <div className="card" onClick={this.cardClicked}>
        <img src={img} alt={name} />
        <div className="name">
          {name}
        </div>
        <div className="price">
          {price}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  img: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  onClick() {},
};
