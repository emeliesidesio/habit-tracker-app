import React from "react"
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
        <p className="form-copy">Do this task every</p>
        <div className="task-amount">
          <h6 className="day">m</h6>
          <h6 className="day">t</h6>
          <h6 className="day">w</h6>
          <h6 className="day">t</h6>
          <h6 className="day">f</h6>
          <h6 className="day">s</h6>
          <h6 className="day">s</h6>
        </div>
        <p>Add an icon</p>
        <div className="submit-container"><input className="btn submit" type="submit" value="Save habit" /></div>
      </form>
    </div>
  )
}
}
