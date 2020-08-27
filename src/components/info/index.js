import React, { Component } from "react"
import "./styles.scss"

export default class Info extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className={`info_container ${this.props.className}`}>
        <div className="info_wrapper">
          <p className="address">Rais Road, Upper Jutial, Gilgit, Pakistan</p>
          <p className="number">+92 344 8585 803 </p>
          <p className="email">zubair.iqbal2018@gmail.com</p>
        </div>
      </div>
    )
  }
}
