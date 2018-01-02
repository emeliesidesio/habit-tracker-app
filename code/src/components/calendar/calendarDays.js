import React from "react"
import moment from "moment"
import dateArray from "moment-array-dates"
import CalendarDays from "./calendarDays.js"
import "./calendar.css"

export default class Calendar extends React.Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //   }
  // }
  //
  render() {
    return (
      <div className="calendarWrap">
        <div className="calendarSquare">
          {this.props.dates}
          {this.props.dateFormat}
        </div>
        <div className="calendarBox">
          {this.props.kryss}
        </div>
      </div>
    )
  }
}
