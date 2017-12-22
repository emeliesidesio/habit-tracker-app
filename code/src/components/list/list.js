import React from "react"
import Item from "components/item/item"
import "./list.css"

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
