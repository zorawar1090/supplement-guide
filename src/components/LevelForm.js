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
        <button value="Beginner" onClick={handleClick('level')}>Beginner</button>
        <button value="Gevorderd" onClick={handleClick('level')}>Gevorderd</button>
      </div>
    )
  }
} 