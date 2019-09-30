import React, { Component } from 'react';
import PropTypes from 'prop-types';

const getButtonClass = (index, length, selected) => {
  if (index === 0) {
    return `segmented-button-start${index === selected ? ' active' : ''}`;
  }
  if (index === length - 1) {
    return `segmented-button-end${index === selected ? ' active' : ''}`;
  }
  return `segmented-button-mid${index === selected ? ' active' : ''}`;
};

/* Segmented button component. */
export default class SegmentedButtonLayout extends Component {
  render() {
    const {
      buttonTexts, extraClasses, selectedButton, onClick,
    } = this.props;

    const childButtons = buttonTexts.map((child, index) => (
      <div
        key={child}
        className={`${
          getButtonClass(index, buttonTexts.length, selectedButton)} 
          ${extraClasses} 
          no-select`}
        onClick={() => onClick(index)}
        onKeyPress={() => onClick(index)}
        role="link"
        tabIndex={0}
      >
        {child}
      </div>
    ));
    return (
      <>
        {childButtons}
      </>
    );
  }
}

SegmentedButtonLayout.propTypes = {
  buttonTexts: PropTypes.arrayOf(PropTypes.string),
  extraClasses: PropTypes.string,
  onClick: PropTypes.func,
  selectedButton: PropTypes.number.isRequired,
};

SegmentedButtonLayout.defaultProps = {
  buttonTexts: [],
  extraClasses: '',
  onClick: () => {},
};
