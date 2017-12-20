import React from "react"
import "./item.css"

export default class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      done: false
    }
  }

 handleCheck = () => {
   this.setState({
     done: !this.state.done
   }, () => {
     this.props.clickedCheckbox(this.props.toDoitem, this.state.done)
   })
 }

 handleRemoveClick = () => {
   this.props.removeItem(this.props.toDoitem)
 }

 render() {
   return (
     <div className="Items">
       <input
         type="checkbox"
         checked={this.state.done}
         onChange={this.handleCheck} />
       {this.props.toDoitem}
       <button className="remove" onClick={this.handleRemoveClick}>Remove</button>
     </div>
   )
 }
}
