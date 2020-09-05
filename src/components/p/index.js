import React from "react"
import "./styles.scss"

export default function P(props) {
  return (
    <div data-aos={props.dataAos} className={props.className}>
      <p className="para">{props.para}</p>
    </div>
  )
}
