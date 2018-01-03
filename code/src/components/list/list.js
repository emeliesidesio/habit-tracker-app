import React from "react"
import Item from "components/item/item"
import "./list.css"

export default class List extends React.Component {

  render() {
    return (
      <div className="list-container">
        {this.props.toDoItems.map(toDoItems => (
          <Item
            key={toDoItems.id}
            id={toDoItems.id}
            toDoItem={toDoItems.value}
            checkItem={this.props.checkItem}
            symbol={this.props.symbol}
            lastClickedId={this.props.lastClickedId}
            removeItem={this.props.removeItem} />
        ))}
      </div>
    )
  }
}
