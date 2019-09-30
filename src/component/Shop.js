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
        description: 'A delicious Original bun baked fresh in our Pittsburgh shop, packaged and shipped to you.',
        price: '$3',
        scalingPrice: [3, 2.75, 2.5, 2.25],
      },
      {
        id: '2',
        img: 'https://cdn.glitch.com/94c5cfdd-a174-4ce4-9667-4041d68dcaa7%2Fbunbunblackberry.jpeg?v=1569551666817',
        name: 'Blackberry',
        description: 'A delicious Blackberry bun baked fresh in our Pittsburgh shop, packaged and shipped to you.',
        price: '$4',
        scalingPrice: [4, 3.75, 3.5, 3.25],
      },
      {
        id: '3',
        img: 'https://cdn.glitch.com/94c5cfdd-a174-4ce4-9667-4041d68dcaa7%2Fbunbunwalnut.jpeg?v=1569551668513',
        name: 'Walnut',
        description: 'A delicious Walnut bun baked fresh in our Pittsburgh shop, packaged and shipped to you.',
        price: '$4',
        scalingPrice: [4, 3.75, 3.5, 3.25],
      },
      {
        id: '4',
        img: 'https://cdn.glitch.com/94c5cfdd-a174-4ce4-9667-4041d68dcaa7%2Fbunbungf.jpeg?v=1569551666513',
        name: 'Original (GF)',
        description: 'A delicious Gluten-Free bun baked fresh in our Pittsburgh shop, packaged and shipped to you.',
        price: '$5',
        scalingPrice: [5, 4.75, 4.5, 4.25],
      },
      {
        id: '5',
        img: 'https://cdn.glitch.com/94c5cfdd-a174-4ce4-9667-4041d68dcaa7%2Fbunbunpumpkinspice.jpeg?v=1569551669987',
        name: 'Pumpkin Spice',
        description: 'A delicious Pumpkin Spice bun baked fresh in our Pittsburgh shop, packaged and shipped to you.',
        price: '$4',
        scalingPrice: [4, 3.75, 3.5, 3.25],
      },
      {
        id: '6',
        img: 'https://cdn.glitch.com/94c5cfdd-a174-4ce4-9667-4041d68dcaa7%2Fbunbuncaramelpecan.jpeg?v=1569551667538',
        name: 'Caramel Pecan',
        description: 'A delicious Caramel Pecan bun baked fresh in our Pittsburgh shop, packaged and shipped to you.',
        price: '$4',
        scalingPrice: [4, 3.75, 3.5, 3.25],
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
        scalingPrice={item.scalingPrice}
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
