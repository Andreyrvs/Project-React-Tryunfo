import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

class Input extends Component {
  render() {
    const { handleChange, datatest, type, elementId, value } = this.props;
    return (
      <label htmlFor={ elementId }>
        { elementId }
        <input
          data-testid={ datatest }
          id={ elementId }
          onChange={ handleChange }
          type={ type }
          value={ value }
        />
      </label>
    );
  }
}

Input.propTypes = {
  datatest: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  elementId: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default Input;
