import React from "react"
import BreifMe from "../breifMe"
import Icon from "../../images/icon.svg"
import Info from "../info"
import "./styles.scss"

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <BreifMe className="breif" />
        <Info className="info" />
        <img className="footer_logo" src={Icon} alt="zubair-logo" />
      </div>
      <div className="footer_border"></div>
    </div>
  )
}
