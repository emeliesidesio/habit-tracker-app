import React from "react"
import calendaricon from "assets/calendar.png"
import { Link } from "react-router-dom"
import "./header.css"

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <Link to="/"><div className="logo">Habit tracker</div></Link>
        <Link to="/calendar"><img className="calendaricon" src={calendaricon} alt="" /></Link>
      </div>
    )
  }
}
