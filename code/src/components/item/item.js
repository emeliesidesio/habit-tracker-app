import React from "react"
import { Link } from "react-router-dom"
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
     this.props.checkItem(this.props.toDoitem, this.state.done)
   })
 }

 handleRemoveClick = () => {
   this.props.removeItem(this.props.toDoitem)
 }

 render() {
   return (

     <div>
       {this.props.toDoItem === "+" &&
       <div className="Items">
         <Link to="/form">
           <div className="item-circle">
             <div className="item-plus">+</div>
           </div>
         </Link>
       </div>}

       {this.props.toDoItem !== "+" &&
       <div className="item-circle">

         <div className="done-circle-checked">
           <input
             id="done-circle"
             type="checkbox"
             checked={this.state.done}
             onChange={this.handleCheck} />
           <span className="checkmark" />
           <label htmlFor="done-circle" />
         </div>
         <button className="remove" onClick={this.handleRemoveClick}><span className="remove-icon">-</span></button>
         <div className="item-title">
           <h2>testar</h2>
         </div>
       </div>}
     </div>

   )
 }
}
