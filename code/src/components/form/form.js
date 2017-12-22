import React from "react"
import carrot from "assets/carrot.png"
import heart from "assets/heart.png"
import cleaning from "assets/cleaning.png"
import petfood from "assets/pet-food.png"
import piggybank from "assets/piggy-bank.png"
import leaf from "assets/leaf.png"
import pint from "assets/pint.png"
import strong from "assets/strong.png"
import luggage from "assets/luggage.png"
import tickets from "assets/tickets.png"
import star from "assets/star.png"
import balloons from "assets/balloons.png"
import ChooseIcon from "components/form/chooseicon"
import TimesWeek from "components/form/timesweek"
import "./form.css"

const radio = [carrot, heart, cleaning, petfood, piggybank, luggage, balloons, strong, pint, tickets, star, leaf]
const checkbox = ["1", "2", "3", "4", "5", "6", "7"]

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newToDoItem: "",
      done: false
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
            {checkbox.map(amount => (
              <TimesWeek
                day={amount} />
            ))}
          </div>

          <p>Add a cool icon</p>
          <div className="icon-container">
            {radio.map(icon => (
              <ChooseIcon
                habitIcon={icon} />
            ))}

          </div>
          <div className="submit-container"><input className="btn submit" type="submit" value="Save habit" /></div>
        </form>
      </div>
    )
  }
}
