import React from "react"
import { Link } from "gatsby"
import Logo from "../../assets/svgs/logo.svg"
import Home from "../../assets/svgs/home.svg"
import "./styles.scss"

export default function Header() {
  return (
    <div className="header">
      <img src={Logo} className="logo" />
      <div className="home_wrapper">
        <Link to="/">
          <img src={Home} className="home_logo" />
        </Link>
      </div>
    </div>
  )
}
