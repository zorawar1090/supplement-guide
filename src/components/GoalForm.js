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
        <button value="Spieropbouw" onClick={handleClick('goal')}>Spieropbouw</button>
        <button value="Goud-Droog" onClick={handleClick('goal')}>Goud-Droog</button>
      </div>
    )
  }
} 