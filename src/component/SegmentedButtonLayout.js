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
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
    this.setSelected = this.setSelected.bind(this);
  }

  setSelected(index) {
    this.setState({
      selected: index,
    });
  }

  render() {
    const { buttonTexts, extraClasses } = this.props;
    const { selected } = this.state;

    const childButtons = buttonTexts.map((child, index) => (
      <div
        key={child}
        className={`${getButtonClass(index, buttonTexts.length, selected)} ${extraClasses}`}
        onClick={() => this.setSelected(index)}
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
};

SegmentedButtonLayout.defaultProps = {
  buttonTexts: [],
  extraClasses: '',
};
