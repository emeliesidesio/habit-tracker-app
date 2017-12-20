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
    <div className="page">
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="add your task here!" value={this.state.newToDoItem} onChange={this.newItem} onKeyPress={this.newItem} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
}
