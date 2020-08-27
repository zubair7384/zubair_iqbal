import React from "react"
import Logo from "../../assets/svgs/zubair.svg"
import "./styles.scss"

export default function Header() {
  return (
    <div className="header">
      <img src={Logo} className="logo" />
    </div>
  )
}
