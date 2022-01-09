import React from 'react';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import './Form.css';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <Input
            datatest="name-input"
            id="name"
            onChange={ () => { } }
            type="text"
          />
     
        </form>
      </div>
    );
  }
}

export default Form;
