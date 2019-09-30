import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

/* Alert component */
const Alert = ({ show, children }) => (
  <CSSTransition
    in={show}
    classNames="alert-anim"
    timeout={250}
    mountOnEnter
    unmountOnExit
  >
    <div className="alert">{children}</div>
  </CSSTransition>
);

Alert.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
};

Alert.defaultProps = {
  children: [],
};

export default Alert;
