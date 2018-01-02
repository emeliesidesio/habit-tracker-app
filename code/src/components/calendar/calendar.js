import React from "react"
import moment from "moment"
import dateArray from "moment-array-dates"
import CalendarDays from "./calendarDays.js"
import "./calendar.css"

const today = new Date()
const startOfMonth = moment().startOf("month")
const endOfMonth = moment().endOf("month")
const daysInMonth = dateArray.range(startOfMonth, endOfMonth, "YYYY-MM-DD", true)
const startOfWeek = moment().startOf("week")
const endOfWeek = moment().endOf("week")
const daysInWeek = dateArray.range(startOfWeek, endOfWeek, "YYYY-MM-DD", true)
const momentToday = moment().format("dddd")
const daysAgoFromToday = moment().subtract(3, "days")
const daysFromToday = moment().add(3, "days")
const thisWeek = dateArray.range(daysAgoFromToday, daysFromToday, "dddd", true)

export default class Calendar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="calendarPage">
        {/* {momentToday}
        Nästa datum är
        {today.toLocaleString()}
        {today.toLocaleString()} */}

        {/* <div>
          {daysInMonth.map(date => (
@ -42,19 +41,35 @@ export default class Calendar extends React.Component {
            <div className="calenderSquare">{date}</div>
          ))}
        </div> */}
         {/* {this.props.toDoItems[0].checkedDates} */}
        <div className="calendarWrapper">
          <div className="calendarHeaderRow">
            <div className="taskInfo">!</div>
            <div className="weekDay">M</div>
            <div className="weekDay">T</div>
            <div className="weekDay">W</div>
            <div className="weekDay">T</div>
            <div className="weekDay">F</div>
            <div className="weekDay">S</div>
            <div className="weekDay">S</div>
          </div>

          <div className="weekWrapper">
            {this.props.toDoItems.map(item => (
              <CalendarDays
                id={item.id}
                key={item.id}
                // checkedDates={item.checkedDates}
                kryss="o"
                daysInWeek={daysInWeek}
              />
            ))}
            {/* {daysInWeek.map(date => (
              <CalendarDays
                dates={date}
                kryss="hej"
              />
            ))}
            ))} */}
          </div>
        </div>
      </div>
    )
  }
}
