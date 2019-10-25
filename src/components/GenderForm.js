import React from 'react'

export default class GenderForm extends React.Component {
  
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleClick } = this.props;
    return (
      <div>
        <button value="Man" onClick={handleClick('gender')}>Man</button>
        <button value="Vrouw" onClick={handleClick('gender')}>Vrouw</button>
      </div>
    )
  }
} 