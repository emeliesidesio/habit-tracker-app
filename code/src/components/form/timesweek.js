import React from "react"

export default class TimesWeek extends React.Component {
  render() {
    return (
      <label className="checklabel">
        <input className="checkinput" type="checkbox" name="amount" value="small" />
        <h6 className="day">{this.props.day}</h6>
      </label>
    )
  }
}
