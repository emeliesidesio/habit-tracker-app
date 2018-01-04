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
    this.state = {
      toDoItems:
      // JSON.parse(localStorage.toDoItems)
      [
        {
          id: 1,
          value: "+",
          checked: true,
          times: 4,
          symbol: carrot,
          checkedDates: ["2018-01-01", "2018-01-04"]
        },
        { id: 2, value: "+" },
        { id: 3, value: "+" }, { id: 4, value: "+", checkedDates: ["2018-01-03", "2018-01-06"] },
        { id: 5, value: "+" }, { id: 6, value: "+" },
        { id: 7, value: "+" }, { id: 8, value: "+" }
      ]
    }
  }

  addItem = (id, item, done, times, radio) => {
    console.log("got a new index in array", (id) - 1)

    const allItems = this.state.toDoItems
    allItems[parseInt(id, 10) - 1] = {
      id: id,
      value: item,
      checked: done,
      times: times,
      symbol: radio
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
  //   // Om checked = true
  //   // vill ta dagens datum
  //   console.log(today)
  //   // lägga till datumet i state i checkedDates
  //   const allItems = this.state.toDoItems
  //   allItems[parseInt(id)-1].checkedDates = [...allItems[parseInt(id)-1].checkedDates, today]
  //   this.setState({
  //     toDoItems: allItems
  //   }, () => {
  //     console.log("The items are: ", this.state.toDoItems)
  //   })
  //   // Om checked = false
  //   // ta bort dagens datum ur checkedDates
  }

  removeItem = id => {
    console.log("got a new index in array", (id) - 1)

    const allItems = this.state.toDoItems
    allItems[parseInt(id, 10) - 1] = {
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
                  value={this.state.value}
                  removeItem={this.removeItem}
                  symbol={this.state.symbol}
                  lastClickedId={this.changeLastClickedId} />
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
