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
     <div className="item-circle">
       <div className="item-plus">
       +
       </div>
    </div>

       {/* <div className="item-circle">

       <label className="done-circle" htmlFor="done-circle"><span className="checkbox">&#x2713;</span></label>

       <input
         id="done-circle"
         className="done-circle-checked"
         type="checkbox" />
         checked={this.state.done}
         onChange={this.handleCheck} />
       {this.props.toDoitem}
       <button className="remove" onClick={this.handleRemoveClick}><span className="remove-icon">-</span></button>
       <h2>Habit</h2>
     </div> */}
     </div>
   )
 }

}
