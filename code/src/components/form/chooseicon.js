import React from "react"
import carrot from "assets/carrot.png"
import heart from "assets/heart.png"
import cleaning from "assets/cleaning.png"
import petfood from "assets/pet-food.png"
import piggybank from "assets/piggy-bank.png"
import leaf from "assets/leaf.png"
import pint from "assets/pint.png"
import strong from "assets/strong.png"

export default class ChooseIcon extends React.Component {
  render() {
    return (
      <label className="radiolabel">
        <input className="radioinput" type="radio" name="icon" value="small" />
        <img className="habiticon" src={this.props.img} alt="" />
      </label>
    )
  }
}
