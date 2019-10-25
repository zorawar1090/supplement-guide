import React from 'react'

export default class GenderForm extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <button value="Man" onClick={handleChange('gender')}>Man</button>
        <button value="Vrouw" onClick={handleChange('gender')}>Vrouw</button>
      </div>
    )
  }
} 