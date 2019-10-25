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

  changeStep = step => e => {
    e.preventDefault()
    this.setState(
      {
        step: step
      }
    )
  }

  handleClick = input => e => {
    console.log(e.target.childNodes[0].innerHTML)
    const { step } = this.state
    const gender = 'male'
    const age = '18-34'
    const goal = 'diet'
    if(step === 3){
      window.open(`https://xxlnutrition.com/nl/nld/supplement_guide_results/products?gender=${gender}&age=${age}&goal=${goal}`, '_blank')
    }
    this.setState({ [input]: e.target.childNodes[0].innerHTML})
    this.nextStep()
  }

  render() {
    const { step } = this.state
    const { gender, level, goal } = this.state
    const values = { gender, level, goal }
    switch (step) {
      case 1:
        return (
          <div className="supplement-guide">
            <StepNavigation changeStep={this.changeStep} step={step}/>
            <GenderForm
              nextStep={this.nextStep}
              handleClick={this.handleClick}
              values={values}
            />
          </div>
        )
      case 2:
        return (
          <div className="supplement-guide">
            <StepNavigation changeStep={this.changeStep} step={step}/>
            <LevelForm
              nextStep={this.nextStep}
              handleClick={this.handleClick}
              values={values}
            />
          </div>
        )
      case 3:
        return (
          <div className="supplement-guide">
            <StepNavigation changeStep={this.changeStep} step={step}/>
            <GoalForm
              values={values}
              handleClick={this.handleClick}
            />
          </div>
        )
      default:
        return (
          <h1>Redirecting</h1>
        )
    }
  }
}



