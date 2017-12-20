import React from "react"
import "./header.css"

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="logo">Habit tracker</div>
        <img src="./calendar.png" alt="" />
      </div>
    )
  }
}
