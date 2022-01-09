import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import Input from './Input/Input';
import Select from './Select/Select';
import TextArea from './TextArea/TextArea';
import Checkbox from './Checkbox/Checkbox';
import Button from './Button/Button';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <form>
          <Input
            datatest="name-input"
            id="input-name"
            handleChange={ onInputChange }
            type="text"
            label="Nome"
            value={ cardName }
          />
          <TextArea
            datatest="description-input"
            id="input-description"
            label="Descrição"
            value={ cardDescription }
            handleChange={ onInputChange }
          />
          <Input
            datatest="attr1-input"
            id="input-attr01"
            handleChange={ () => { } }
            type="number"
            label="Attr01"
          />
          <Input
            datatest="attr2-input"
            id="input-attr02"
            handleChange={ () => { } }
            type="number"
            label="Attr02"
          />
          <Input
            datatest="attr3-input"
            id="input-attr03"
            handleChange={ () => { } }
            type="number"
            label="Attr03"
          />
          <Input
            datatest="image-input"
            id="input-image"
            label="Imagem"
          />
          <Select
            datatest="rare-input"
            id="input-select"
          />
          <Checkbox
            datatest="trunfo-input"
            type="checkbox"
            label="Super Trybe Trunfo"
          />
          <Button
            datatest="save-button"
            id="button-save"
            type="button"
          />
        </form>
      </div>
    );
  }
}

Form.propTyes = {
  cardName: PropTypes.string,
}.isRequire;

export default Form;
