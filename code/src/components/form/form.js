import React from "react"
import carrot from "assets/carrot.png"
import heart from "assets/heart.png"
import cleaning from "assets/cleaning.png"
import petfood from "assets/pet-food.png"
import piggybank from "assets/piggy-bank.png"
import leaf from "assets/leaf.png"
import pint from "assets/pint.png"
import strong from "assets/strong.png"
import "./form.css"

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
          <h6 className="day">1</h6>
          <h6 className="day">2</h6>
          <h6 className="day">3</h6>
          <h6 className="day">4</h6>
          <h6 className="day">5</h6>
          <h6 className="day">6</h6>
          <h6 className="day">7</h6>
        </div>
        <p>Add a cool icon</p>
        <div className="icon-container">
          <img className="habiticon" src={carrot} alt="" />
          <img className="habiticon" src={heart} alt="" />
          <img className="habiticon" src={cleaning} alt="" />
          <img className="habiticon" src={leaf} alt="" />
          <img className="habiticon" src={petfood} alt="" />
          <img className="habiticon" src={piggybank} alt="" />
          <img className="habiticon" src={pint} alt="" />
          <img className="habiticon" src={strong} alt="" />
        </div>
        <div className="submit-container"><input className="btn submit" type="submit" value="Save habit" /></div>
      </form>
    </div>
  )
}
}
