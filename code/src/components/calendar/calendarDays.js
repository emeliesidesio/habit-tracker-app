import React from "react"
import moment from "moment"
import dateArray from "moment-array-dates"
import "./calendar.css"

export default class Calendar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      weekMatches: []
    }
  }

  // Ska skriva en fnuktion som mappar över veckans datum och
  // letar efter dom i checkedDates.
  // Sen storar dom i state och renderar dom.
  componentDidMount() {
    console.log("the weeks dates:", this.props.daysInWeek)
    console.log("the checked dates:", this.props.checkedDates)
    if (this.props.checkedDates) {
      const isMatch = this.props.daysInWeek.map(date => {
        return this.props.checkedDates.find(d => (
          d === date
        ))
      })
      console.log("Matching dates", isMatch)
      this.setState({
        weekMatches: isMatch
      })
      console.log("State dates", isMatch)
    }
  }

  // addMatchedDate = dates => {
  //   this.setState({
  //     weekMatches: dates
  //   })
  // }

  render() {
    return (
      <div className="calendarLine">
        <div className="taskInfo">
          {this.props.id}
        </div>

        <div className="calendarLineRight">
          <div className="calendarBox">
            {this.state.weekMatches[0]}
          </div>
          <div className="calendarBox">
            {this.state.weekMatches[1]}
          </div>
          <div className="calendarBox">
            {this.state.weekMatches[2]}
          </div>
          <div className="calendarBox">
            {this.state.weekMatches[3]}
          </div>
          <div className="calendarBox">
            {this.state.weekMatches[4]}
          </div>
          <div className="calendarBox">
            {this.state.weekMatches[5]}
          </div>
          <div className="calendarBox">
            {this.state.weekMatches[6]}
          </div>
        </div>

      </div>
    )
  }
}
