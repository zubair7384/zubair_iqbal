import React from "react"
import "./styles.scss"

export default function Button(props) {
  return (
    <div className="container_button">
      <button className="button">
        <a href={props.href} target="_blank">
          {props.text}
        </a>
      </button>
    </div>
  )
}
