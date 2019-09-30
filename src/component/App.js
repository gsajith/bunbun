import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

import PageWrapper from './PageWrapper';
import PageWrapperNoLockup from './PageWrapperNoLockup';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Details from './Details';
import Catering from './Catering';
import Modal from './Modal';

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
    this.state = {
      detailsShown: false,
      shownItem: null,
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
      shownItem: null,
    });
  }

  render() {
    const { detailsShown, shownItem } = this.state;
    const item = shownItem != null ? shownItem : {
      props: {
        name: '',
        description: '',
        price: '',
      },
    };
    return (
      <Router>
        <Modal show={detailsShown} handleClose={this.hideDetails}>
          {[<Details key="0" handleClose={this.hideDetails} item={item} />]}
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
