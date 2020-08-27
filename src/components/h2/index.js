import React from "react"
import "./styles.scss"

export default function H2(props) {
  return (
    <div className={props.className}>
      <h2 className="headingTwo">{props.heading}</h2>
    </div>
  )
}
