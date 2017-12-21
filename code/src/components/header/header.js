import React from "react"
import calendaricon from "assets/calendar.png"
import "./header.css"

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="logo">Habit tracker</div>
        <img className="calendaricon" src={calendaricon} alt="" />
      </div>
    )
  }
}
