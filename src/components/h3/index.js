import React from "react"
import "./styles.scss"

export default function H3(props) {
  return (
    <div>
      <h3 data-aos={props.dataAos} className={props.className}>
        {props.headingOne} <span className="span">{props.headingTwo}</span>
        <br />
        {props.headingThree}
      </h3>
    </div>
  )
}
