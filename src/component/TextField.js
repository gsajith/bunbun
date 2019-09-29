import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* Text field component */
export default class TextField extends Component {
  render() {
    const {
      required, header, inputType, name, placeholder, value,
    } = this.props;
    const requiredSet = required === 'true' ? true : null;
    return (
      <div className="textfield">
        <div className="textfield-header">{header}</div>
        <input
          className="textfield-input"
          type={inputType}
          name={name}
          placeholder={placeholder}
          value={value}
          required={requiredSet}
        />
      </div>
    );
  }
}

TextField.propTypes = {
  required: PropTypes.string,
  header: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

TextField.defaultProps = {
  required: null,
  header: null,
  placeholder: null,
  value: null,
};
