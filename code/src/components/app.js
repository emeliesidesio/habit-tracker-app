import React from "react"
import Form from "components/form/form.js"
import Item from "components/item/item.js"
import Header from "components/header/header.js"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      toDoItems: []
    }
  }

   addItem = item => {
     console.log("got a new item", item)
     this.setState({
       toDoItems: [...this.state.toDoItems, item]
     }, () => {
       console.log("The items are: ", this.state.toDoItems)
     })
   }

   checkItem = (item, done) => {
     console.log("this item is finished", item)
     console.log("this item is done?", done)
   }

   removeItem = item => {
     this.setState({
       toDoItems: this.state.toDoItems.filter(todo => todo !== item)
     })
   }

   render() {
     return (
       <div className="app-container">
         <Header />
         <Form addItemToList={this.addItem} />
         <div className="ItemsList">

           {this.state.toDoItems.map(toDoItems => (
             <Item
               key={toDoItems}
               toDoitem={toDoItems}
               clickedCheckbox={this.checkItem}
               removeItem={this.removeItem} />
           ))}
         </div>
       </div>
     )
   }
}

export default App
