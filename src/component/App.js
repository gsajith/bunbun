import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';

import PageWrapper from './PageWrapper';
import PageWrapperNoLockup from './PageWrapperNoLockup';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Details from './Details';
import Catering from './Catering';
import Modal from './Modal';
import Alert from './Alert';

import './App.scss';

const HomeContainer = () => (
  <PageWrapperNoLockup>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </PageWrapperNoLockup>
);

const DefaultContainer = (props) => {
  const { shopItemClicked } = props;
  return (
    <PageWrapper>
      <Route path="/shop" render={() => <Shop shopItemClicked={shopItemClicked} />} />
      <Route path="/catering" component={Catering} />
    </PageWrapper>
  );
};

DefaultContainer.propTypes = {
  shopItemClicked: PropTypes.func.isRequired,
};


export default class App extends Component {
  constructor(props) {
    super(props);
    this.showDetails = this.showDetails.bind(this);
    this.hideDetails = this.hideDetails.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      detailsShown: false,
      shownItem: null,
      alertShown: false,
    };
  }

  showDetails(item) {
    this.setState({
      detailsShown: true,
      shownItem: item,
    });
  }

  hideDetails() {
    this.setState({
      detailsShown: false,
    });
  }

  addToCart() {
    this.setState({
      detailsShown: false,
      alertShown: true,
    });
    setTimeout(() => {
      this.setState({
        alertShown: false,
      });
    }, 3000);
  }

  render() {
    const { detailsShown, shownItem, alertShown } = this.state;
    const item = shownItem != null ? shownItem : {
      props: {
        name: '',
        description: '',
        price: '',
        scalingPrice: [0, 0, 0, 0],
      },
    };
    return (
      <Router>
        <Alert show={alertShown}>
          <span className="red">
            {item.props.name}
            {' '}
            Bun
          </span>
          {' '}
          has been added to
          {' '}
          <Link className="red" to="/cart">your cart</Link>
          !
        </Alert>
        <Modal show={detailsShown} handleClose={this.hideDetails}>
          {[<Details
            key="0"
            handleClose={this.hideDetails}
            handleCartAdd={this.addToCart}
            item={item}
          />]}
        </Modal>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/about" component={HomeContainer} />
          <Route render={() => <DefaultContainer shopItemClicked={this.showDetails} />} />
        </Switch>
      </Router>
    );
  }
}
