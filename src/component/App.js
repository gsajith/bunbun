import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

import PageWrapper from './PageWrapper';
import PageWrapperNoLockup from './PageWrapperNoLockup';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Catering from './Catering';

import './App.scss';

const HomeContainer = () => (
  <PageWrapperNoLockup>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </PageWrapperNoLockup>
);

const DefaultContainer = () => (
  <PageWrapper>
    <Route path="/shop" component={Shop} />
    <Route path="/catering" component={Catering} />
  </PageWrapper>
);

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/about" component={HomeContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
    );
  }
}
