import React from "react"
import "./calendar.css"

export default class Calendar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todaysDate: new date()
    }
  }

  getWeek = () => {
    // const todaysDate = new date()
  }

  render() {
    return (
      <div className="calendarPage">
        {this.state.todaysDate}
      </div>
    )

  }
}
