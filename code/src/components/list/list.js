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
            id={toDoItems.id}
            toDoItem={toDoItems.value}
            checkItem={this.checkItem}
            removeItem={this.removeItem} />
        ))}
      </div>
    )
  }
}
