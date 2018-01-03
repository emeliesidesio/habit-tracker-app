import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Form from "components/form/form.js"
import Header from "components/header/header.js"
import Calendar from "components/calendar/calendar.js"
import List from "components/list/list"
import carrot from "assets/carrot.png"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      toDoItems: [
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
      ],
      lastClickedId: ""
    }
  }

  addItem = (id, item, done, times, radio) => {
    console.log("got a new id", id)
    console.log("got a new item", item)
    console.log("it is done?", done)
    console.log("I shall do it how many times? ", times)
    console.log("I want the logo ", radio)
    console.log("got a new index in array", (id)-1)

    const allItems = this.state.toDoItems
    allItems[parseInt(id)-1] = {
      id: id,
      value: item,
      checked: done,
      times: times,
      symbol: radio
    }

    this.setState({
      toDoItems: allItems
    }, () => {
      console.log("The items are: ", this.state.toDoItems)
    })
  }

  changeLastClickedId = id => {
    this.setState({
      lastClickedId: id
    }, () => {
      console.log("Du har klickat på", this.state.lastClickedId)
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
                  checkItem={this.state.checkItem}
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
