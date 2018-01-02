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
      <div className="calendarLine">
        <div className="taskInfo">
          {this.props.id}
        </div>

        <div className="calendarLineRight">
          <div className="calendarBox">
            {this.props.daysInWeek[0]}
          </div>
          <div className="calendarBox">
            {this.props.daysInWeek[1]}
          </div>
          <div className="calendarBox">
            {this.props.daysInWeek[2]}
          </div>
          <div className="calendarBox">
            {this.props.daysInWeek[3]}
          </div>
          <div className="calendarBox">
            {this.props.daysInWeek[4]}
          </div>
          <div className="calendarBox">
            {this.props.daysInWeek[5]}
          </div>
          <div className="calendarBox">
            {this.props.daysInWeek[6]}
          </div>
        </div>

      </div>
    )
  }
}
