import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

/* Modal component */
const Modal = ({ handleClose, show, children }) => (
  <div>
    <CSSTransition
      in={show}
      classNames="opacity"
      timeout={250}
      mountOnEnter
      unmountOnExit
    >
      <div className="modal" onClick={handleClose} />
    </CSSTransition>
    <CSSTransition
      in={show}
      classNames="slide-in-right"
      timeout={250}
      mountOnEnter
      unmountOnExit
    >
      <section className="modal-main">
        {children}
      </section>
    </CSSTransition>
  </div>
);

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
};

Modal.defaultProps = {
  children: [],
};

export default Modal;
