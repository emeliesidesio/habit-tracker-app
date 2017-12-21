import React from "react"
import "./list.css"
import Item from "components/item/item"

export default class List extends React.Component {

  render() {
    return (
      <div>
        {this.props.toDoItems.map(toDoItems => (
          <Item
            key={toDoItems.id}
            toDoitem={toDoItems.value}
            clickedCheckbox={this.checkItem}
            removeItem={this.removeItem} />
        ))}
      </div>
    )
  }
}
