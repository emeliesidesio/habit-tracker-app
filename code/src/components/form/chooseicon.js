import React from "react"

export default class ChooseIcon extends React.Component {
  render() {
    return (
      <label className="radiolabel">
        <input className="radioinput" type="radio" name="icon" value="small" />
        <img className="habiticon" src={this.props.habitIcon} alt="" />
      </label>
    )
  }
}
