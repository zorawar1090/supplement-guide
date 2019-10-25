import React from 'react'

export default class StepNavigation extends React.Component {

  render(){
    const steps = [1, 2, 3]
    return (
      <div className="navigation">
        <ul>
          {steps.map(step => 
            <li>{step}</li>
          )}
        </ul>
      </div>
    )
  }
}