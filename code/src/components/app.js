import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import moment from "moment"
import Form from "components/form/form.js"
import Header from "components/header/header.js"
import Calendar from "components/calendar/calendar.js"
import List from "components/list/list"
import carrot from "assets/carrot.png"

const today = moment().format("YYYY-MM-DD")
class App extends React.Component {

  constructor(props) {
    super(props)
    let toDoItems =  [
      {
        id: "0",
        value: "+",
        checked: true,
        times: 4,
        symbol: carrot,
        checkedDates: ["2018-01-01", "2018-01-04"]
      },
      { id: "1", value: "+" },
      { id: "2", value: "+" }, { id: "3", value: "+", checkedDates: ["2018-01-03", "2018-01-06"] },
      { id: "4", value: "+" }, { id: "5", value: "+" },
      { id: "6", value: "+" }, { id: "7", value: "+" }
    ]

    if (localStorage.toDoItems) {
      toDoItems = JSON.parse(localStorage.toDoItems)
    }

    this.state = {
      toDoItems: toDoItems
    }
  }

  addItem = (id, item, done, times, radio) => {
    console.log("got a new index in array", parseInt(id, 10))
    const allItems = this.state.toDoItems
    const itemIndex = parseInt(id, 10)
    allItems[itemIndex] = {
      id: id,
      value: item,
      checked: done,
      times: times,
      symbol: radio,
      checkedDates: []
    }
    this.setState({
      toDoItems: allItems
    }, () => {
      const jsonStringOfItems = JSON.stringify(this.state.toDoItems)
      localStorage.toDoItems = jsonStringOfItems
      console.log("The items are: ", this.state.toDoItems)
    })
  }

  checkItem = (id, done) => {
    console.log("this item is finished", id)
    console.log("this item is done?", done)
    // Om checked = true
    // vill ta dagens datum
    console.log(today)
    // lägga till datumet i state i checkedDates
    const allItems = this.state.toDoItems
    const itemIndex = parseInt(id, 10)
    allItems[itemIndex].checkedDates = [...allItems[itemIndex].checkedDates, today]
    this.setState({
      toDoItems: allItems
    }, () => {
      console.log("The items are: ", this.state.toDoItems)
    })
    // Om checked = false
    // ta bort dagens datum ur checkedDates
  }

  removeItem = id => {
    console.log("got a new index in array", (id))
    const allItems = this.state.toDoItems
    const itemIndex = parseInt(id, 10)
    allItems[itemIndex] = {
      id: id,
      value: "+",
      checked: false,
      times: "",
      symbol: "",
      checkedDates: []
    }

    this.setState({
      toDoItems: allItems
    }, () => {
      const jsonStringOfItems = JSON.stringify(this.state.toDoItems)
      localStorage.toDoItems = jsonStringOfItems
      console.log("The items are: ", this.state.toDoItems)
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <Route
            path="/form/:id"
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
                  toDoItems={this.state.toDoItems}
                  id={this.state.toDoItems.id}
                  value={this.state.value}
                  symbol={this.state.symbol}
                  removeItem={this.removeItem}
                  checkItem={this.checkItem} />
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
