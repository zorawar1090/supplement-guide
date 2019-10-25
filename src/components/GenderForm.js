import React from 'react'
import {ReactComponent as Female} from '../images/female.svg'
import {ReactComponent as Male } from '../images/mars.svg'

export default class GenderForm extends React.Component {
  
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleClick } = this.props;
    return (
      <div className="content">
        <div className="control-group">
          <Male className="img" title="Man" onClick={handleClick('gender')}/> <br />
          <button className="btn btn-default"value="Man" onClick={handleClick('gender')}>Man</button> 
        </div>
        <div className="control-group">
          <Female className="img" title="Vrouw" onClick={handleClick('gender')}/> <br />
          <button className="btn btn default" value="Vrouw" onClick={handleClick('gender')}>Vrouw</button>
        </div>
      </div>
    )
  }
} 