import React from "react"
// import carrot from "assets/carrot.png"
// import heart from "assets/heart.png"
// import cleaning from "assets/cleaning.png"
// import petfood from "assets/pet-food.png"
// import piggybank from "assets/piggy-bank.png"
// import leaf from "assets/leaf.png"
// import pint from "assets/pint.png"
// import strong from "assets/strong.png"
import ChooseIcon from "components/form/chooseicon"
import TimesWeek from "components/form/timesweek"
import "./form.css"

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newToDoItem: "",
      done: false,
      checkbox: ["1", "2", "3", "4", "5", "6", "7"],
      radio: ["assets/carrot.png", "assets/heart.png", "assets/cleaning.png", "assets/pet-food.png", "assets/piggy-bank.png", "assets/leaf.png", "assets/pint.png", "assets/strong.png"]
    }
  }

newItem = event => {
  this.setState({
    newToDoItem: event.target.value
  })
}

handleSubmit = event => {
  event.preventDefault()
  if (this.state.newToDoItem !== "") {
    console.log("A task was submitted:", this.state.newToDoItem)
    this.props.addItemToList(this.state.newToDoItem, this.state.done)
    this.setState({
      newToDoItem: ""
    })
  }
}

render() {
  return (
    <div className="form-container">
      <h1>I will...</h1>
      <form onSubmit={this.handleSubmit}>
        <input className="input-value" type="text" placeholder="Write a new habit here!" value={this.state.newToDoItem} onChange={this.newItem} onKeyPress={this.newItem} />

        <p className="form-copy">For how many times a week?</p>
        <div className="task-amount">
          {this.state.checkbox.map(checkbox => (
            <TimesWeek
              day={checkbox} />
          ))}
        </div>

        <p>Add a cool icon</p>
        <div className="icon-container">
          {this.state.radio.map(radio => (
            <ChooseIcon
              img={radio} />
          ))}

          {/* <label className="radiolabel">
            <input className="radioinput" type="radio" name="icon" value="small" />
            <img className="habiticon" src={carrot} alt="" />
          </label>
          <label className="radiolabel">
            <input className="radioinput" type="radio" name="icon" value="small" />
            <img className="habiticon" src={heart} alt="" />
          </label>
          <label className="radiolabel">
            <input className="radioinput" type="radio" name="icon" value="small" />
            <img className="habiticon" src={cleaning} alt="" />
          </label>
          <label className="radiolabel">
            <input className="radioinput" type="radio" name="icon" value="small" />
            <img className="habiticon" src={leaf} alt="" />
          </label>
          <label className="radiolabel">
            <input className="radioinput" type="radio" name="icon" value="small" />
            <img className="habiticon" src={petfood} alt="" />
          </label>
          <label className="radiolabel">
            <input className="radioinput" type="radio" name="icon" value="small" />
            <img className="habiticon" src={piggybank} alt="" />
          </label>
          <label className="radiolabel">
            <input className="radioinput" type="radio" name="icon" value="small" />
            <img className="habiticon" src={pint} alt="" />
          </label>
          <label className="radiolabel">
            <input className="radioinput" type="radio" name="icon" value="small" />
            <img className="habiticon" src={strong} alt="" />
          </label> */}
        </div>
        <div className="submit-container"><input className="btn submit" type="submit" value="Save habit" /></div>
      </form>
    </div>
  )
}
}
