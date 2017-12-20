import React from "react"
import "./list.css"

export default class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itemStatus: ""
    }
  }

  render() {
    if (this.state.itemStatus !== this.state.item) {
      return (
        <div>
          <ul>
            <li id="item-1">+</li>
          </ul>
        </div>
      )} else {
      return (
        <Item
          key={toDoItems}
          toDoitem={toDoItems}
          clickedCheckbox={this.checkItem}
          removeItem={this.removeItem} />
      )
    }
  }
}
