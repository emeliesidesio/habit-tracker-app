import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Form from "components/form/form.js"
import Item from "components/item/item.js"
import Header from "components/header/header.js"
import Calendar from "components/calendar/calendar.js"
import List from "components/list/list"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      toDoItems: [{ id: 1, value: "+", checkedDates: ["2018-01-01", "2018-01-04"] }, { id: 2, value: "+" },
        { id: 3, value: "+" }, { id: 4, value: "+" },
        { id: 5, value: "+" }, { id: 6, value: "+" },
        { id: 7, value: "+" }, { id: 8, value: "+" }
      ]
    }
  }

  addItem = (item, done, times, radio) => {
    console.log("got a new item", item)
    console.log("it is done?", done)
    console.log("I shall do it how many times? ", times)
    console.log("I want the logo ", radio)
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
      <BrowserRouter>
        <div className="app-container">
          {/* <Item /> */}
          <Header />
          <Route
            exact
            path="/form"
            render={routeProps =>
              <Form
                {...routeProps}
                addItemToList={this.addItem} />
            } />
          <div className="ItemsList">
            <Route
              exact
              path="/"
              render={routeProps =>
                <List
                  {...routeProps}
                  toDoItems={this.state.toDoItems} />
              } />
          </div>
          <Route
            exact
            path="/calendar"
            render={routeProps =>
              <Calendar
                {...routeProps}
                toDoItems={this.state.toDoItems} />
            } />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
