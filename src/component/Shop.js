import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

/* the main page for the shop route of this app */
export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.shopItems = [
      {
        id: '1',
        img: 'https://cdn.glitch.com/94c5cfdd-a174-4ce4-9667-4041d68dcaa7%2Fbunbunoriginal.jpeg?v=1569551668721',
        name: 'Original',
        description: 'A delicious original bun.',
        price: '$3',
      },
      {
        id: '2',
        img: 'https://cdn.glitch.com/94c5cfdd-a174-4ce4-9667-4041d68dcaa7%2Fbunbunblackberry.jpeg?v=1569551666817',
        name: 'Blackberry',
        description: 'A delicious original bun.',
        price: '$4',
      },
      {
        id: '3',
        img: 'https://cdn.glitch.com/94c5cfdd-a174-4ce4-9667-4041d68dcaa7%2Fbunbunwalnut.jpeg?v=1569551668513',
        name: 'Walnut',
        description: 'A delicious original bun.',
        price: '$4',
      },
      {
        id: '4',
        img: 'https://cdn.glitch.com/94c5cfdd-a174-4ce4-9667-4041d68dcaa7%2Fbunbungf.jpeg?v=1569551666513',
        name: 'Original (GF)',
        description: 'A delicious original bun.',
        price: '$5',
      },
      {
        id: '5',
        img: 'https://cdn.glitch.com/94c5cfdd-a174-4ce4-9667-4041d68dcaa7%2Fbunbunpumpkinspice.jpeg?v=1569551669987',
        name: 'Pumpkin Spice',
        description: 'A delicious original bun.',
        price: '$4',
      },
      {
        id: '6',
        img: 'https://cdn.glitch.com/94c5cfdd-a174-4ce4-9667-4041d68dcaa7%2Fbunbuncaramelpecan.jpeg?v=1569551667538',
        name: 'Caramel Pecan',
        description: 'A delicious original bun.',
        price: '$4',
      },
    ];
    this.shopItemClicked = this.shopItemClicked.bind(this);
  }

  shopItemClicked(item) {
    const { shopItemClicked } = this.props;
    shopItemClicked(item);
  }

  render() {
    const shopItems = this.shopItems.map((item) => (
      <Card
        img={item.img}
        name={item.name}
        alt={item.name}
        price={item.price}
        description={item.description}
        key={item.id}
        onClick={this.shopItemClicked}
      />
    ));
    return (
      <div id="shop-flex" className="flex">
        <div id="shop-title">
          These are all our buns.
        </div>
        {shopItems}
      </div>
    );
  }
}

Shop.propTypes = {
  shopItemClicked: PropTypes.func.isRequired,
};
