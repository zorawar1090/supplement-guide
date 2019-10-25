import React from 'react'

export default class StepNavigation extends React.Component {
  render() {
    const numbers = [1, 2, 3]
    const { step, changeStep } = this.props
    
    return (
      <div className="navigation">
        <ul>
          {numbers.map(number => {
            if(number === step){
              return <li key={number} className="active" onClick={changeStep(number)}>{number}</li>
            }else{
              return <li key={number} onClick={changeStep(number)}>{number}</li>
            }
          }
          )}
        </ul>
      </div>
    )
  }
}