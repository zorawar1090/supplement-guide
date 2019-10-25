import React from 'react'
import GenderForm from './GenderForm'
import LevelForm from './LevelForm'
import GoalForm from './GoalForm'
import StepNavigation from './StepNavigation'

export default class MainForm extends React.Component {
  state = {
    step: 1,
    gender: "",
    level: "",
    goal: ""
  }

  nextStep = () => {
    const { step } = this.state
    this.setState(
      {
        step: step + 1
      }
    )
  }

  handleClick = input => e => {
    console.log(e.target.value)
    this.setState({ [input]: e.target.value })
    this.nextStep()
  }

  render() {
    const { step } = this.state
    const { gender, level, goal } = this.state
    const values = { gender, level, goal }
    switch (step) {
      case 1:
        return (
          <div>
            <StepNavigation />
            <GenderForm
              nextStep={this.nextStep}
              handleClick={this.handleClick}
              values={values}
            />
          </div>
        )
      case 2:
        return (
          <div>
            <StepNavigation />
            <LevelForm
              nextStep={this.nextStep}
              handleClick={this.handleClick}
              values={values}
            />
          </div>
        )
      case 3:
        return (
          <div>
            <StepNavigation />
            <GoalForm
              values={values}
              handleClick={this.handleClick}
            />
          </div>
        )
      default:
        return
    }
  }
}



