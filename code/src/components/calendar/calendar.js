import React from "react"
import moment from "moment"
import dateArray from "moment-array-dates"
import CalendarDays from "./calendarDays.js"
import "./calendar.css"

const startOfWeek = moment().startOf("week").add(1, "days")
const endOfWeek = moment().endOf("week").add(1, "days")
const daysInWeek = dateArray.range(startOfWeek, endOfWeek, "YYYY-MM-DD", true)

const mtwtfss = ["M", "T", "W", "T", "F", "S", "S"]
export default class Calendar extends React.Component {

  render() {
    return (
      <div className="calendarPage">
        <div className="calendarWrapper">
          <div className="calendarHeaderRow">

            <div className="taskInfo">!</div>

            {mtwtfss.map(day => (
              <div className="weekDay">{day}</div>
            ))}

          </div>

          <div className="weekWrapper">
            {this.props.toDoItems.map(item => (
              <CalendarDays
                id={item.id}
                key={item.id}
                symbol={item.symbol}
                checkedDates={item.checkedDates}
                daysInWeek={daysInWeek} />
            ))}
          </div>

        </div>
      </div>
    )
  }
}
