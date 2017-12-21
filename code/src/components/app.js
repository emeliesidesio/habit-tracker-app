import React from "react"
import Form from "components/form/form.js"
import Item from "components/item/item.js"
import Header from "components/header/header.js"
import Calendar from "components/header/header.js"
import List from "components/list/list"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      toDoItems: [{ id: 1, value: "+" }, { id: 2, value: "+" },
        { id: 3, value: "+" }, { id: 4, value: "+" },
        { id: 5, value: "+" }, { id: 6, value: "+" },
        { id: 7, value: "+" }, { i: 8, value: "+" }
      ]
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
         {/* <Item /> */}
         <Header />
         <Form addItemToList={this.addItem} />
         <div className="ItemsList">
           <List
             toDoItems={this.state.toDoItems} />
         </div>
         <Calendar />
       </div>
     )
   }
}

export default App
