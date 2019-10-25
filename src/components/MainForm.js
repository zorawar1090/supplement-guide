import React from 'react'
import GenderForm from './GenderForm'
import LevelForm from './LevelForm'
import GoalForm from './GoalForm'

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

  handleChange = input => e => {
    console.log(e.target.value)
    this.setState({ [input]: e.target.value })
  }

  render() {
    const { step } = this.state
    const { gender, level, goal } = this.state
    const values = { gender, level, goal }

    switch (step) {
      case 1:
        return (
          <GenderForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <LevelForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <GoalForm
            values={values}
          />
        )
      default:
        return
    }
  }
}



