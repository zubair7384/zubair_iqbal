import React from "react"
import "./styles.scss"

export default function H2(props) {
  return (
    <div className={props.className}>
      <h2 className={`headingTwo ${props.headingClass}`}>
        {props.heading}
        <span className={props.spanClassName}>{props.headingTwo}</span>
      </h2>
    </div>
  )
}
