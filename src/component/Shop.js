import React, { Component } from 'react';
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
        price: '$3',
      },
      {
        id: '2',
        img: 'https://cdn.glitch.com/94c5cfdd-a174-4ce4-9667-4041d68dcaa7%2Fbunbunblackberry.jpeg?v=1569551666817',
        name: 'Blackberry',
        price: '$4',
      },
      {
        id: '3',
        img: 'https://cdn.glitch.com/94c5cfdd-a174-4ce4-9667-4041d68dcaa7%2Fbunbunwalnut.jpeg?v=1569551668513',
        name: 'Walnut',
        price: '$4',
      },
      {
        id: '4',
        img: 'https://cdn.glitch.com/94c5cfdd-a174-4ce4-9667-4041d68dcaa7%2Fbunbungf.jpeg?v=1569551666513',
        name: 'Original (GF)',
        price: '$5',
      },
      {
        id: '5',
        img: 'https://cdn.glitch.com/94c5cfdd-a174-4ce4-9667-4041d68dcaa7%2Fbunbunpumpkinspice.jpeg?v=1569551669987',
        name: 'Pumpkin Spice',
        price: '$4',
      },
      {
        id: '6',
        img: 'https://cdn.glitch.com/94c5cfdd-a174-4ce4-9667-4041d68dcaa7%2Fbunbuncaramelpecan.jpeg?v=1569551667538',
        name: 'Caramel Pecan',
        price: '$4',
      },
    ];
  }

  render() {
    const shopItems = this.shopItems.map((item) => (
      <Card
        img={item.img}
        name={item.name}
        alt={item.name}
        price={item.price}
        key={item.id}
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
