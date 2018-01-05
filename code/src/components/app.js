import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import moment from "moment"
import Form from "components/form/form.js"
import Header from "components/header/header.js"
import Calendar from "components/calendar/calendar.js"
import List from "components/list/list"

const today = moment().format("YYYY-MM-DD")
class App extends React.Component {

  constructor(props) {
    super(props)
    let toDoItems = [
      {
        id: "0",
        value: "+",
        checkedDates: []
      },
      { id: "1", value: "+", checkedDates: [] },
      { id: "2", value: "+", checkedDates: [] }, { id: "3", value: "+", checkedDates: [] },
      { id: "4", value: "+", checkedDates: [] }, { id: "5", value: "+", checkedDates: [] },
      { id: "6", value: "+", checkedDates: [] }, { id: "7", value: "+", checkedDates: [] }
    ]

    if (localStorage.toDoItems) {
      toDoItems = JSON.parse(localStorage.toDoItems)
    }

    this.state = {
      toDoItems: toDoItems
    }
  }

  addItem = (id, item, done, times, radio) => {
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
    const allItems = this.state.toDoItems
    const itemIndex = parseInt(id, 10)
    if (done) {
      allItems[itemIndex].checkedDates = [...allItems[itemIndex].checkedDates, today]
      this.setState({
        toDoItems: allItems
      }, () => {
        console.log("The items are: ", this.state.toDoItems)
        const jsonStringOfItems = JSON.stringify(this.state.toDoItems)
        localStorage.toDoItems = jsonStringOfItems
      })
    }
    // else if (done === false) {
    //   const removeDate = allItems[itemIndex].checkedDates.pop()
    //   this.setState({
    //     toDoItems: allItems
    //   }, () => {
    //     console.log("The items are: ", this.state.toDoItems)
    //   })
    // }
  }

  removeItem = id => {
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
