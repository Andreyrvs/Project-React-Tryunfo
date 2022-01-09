import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardImage,
      cardName,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div data-testid="name-card">
        { cardName }
        <img
          alt={ cardName }
          data-testid="image-card"
          src={ cardImage }
        />
        <p data-testid="description-card">
        { cardDescription }
        </p>
        <p data-testid="attr1-card">
          { cardAttr1 }
        </p>
        <p data-testid="cardAttr2">
          { cardAttr2 }
        </p>
        <p data-testid="cardAttr3">
          { cardAttr3 }
        </p>
      </div>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequire;

export default Card;