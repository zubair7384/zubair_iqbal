import React, { Component } from "react"
import RightArrow from "../../assets/svgs/rightArrow.svg"
import "./styles.scss"

export default class BreifMe extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="breif_me_container">
        <div className={`work_wrapper ${this.props.className}`}>
          <img src={RightArrow} className="right_arrow " />
          <div className="breif_wrapper">
            <p className="work_text">Want to work with me?</p>
            <h2 className="breif_text">BRIEF ME</h2>
          </div>
        </div>
      </div>
    )
  }
}
