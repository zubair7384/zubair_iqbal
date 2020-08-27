import React from "react"
// import ReactDOM from "react-dom"
import BreifMe from "../breifMe"
import Info from "../info"
import MenuIcon from "../../assets/svgs/menu-icon.svg"
import Menu from "../../assets/svgs/menu.svg"
import Exit from "../../assets/svgs/exit.svg"
import Twitter from "../../assets/svgs/twitter.svg"
import Facebook from "../../assets/svgs/facebook.svg"
import Instagram from "../../assets/svgs/instagram.svg"
import "animate.css"

import "./styles.scss"

const navLinks = [
  { url: "/skills", name: "Skills.", className: "skills" },
  { url: "/home", name: "Home.", className: "home" },
  { url: "/my-work", name: "My Work.", className: "my_work" },
  { url: "/contact", name: "Contact.", className: "contact" },
]

export default class SideBar extends React.Component {
  constructor() {
    super()
    this.state = {
      style: "menu",
      menuStatus: "open",
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    switch (this.state.menuStatus) {
      case "open":
        this.setState({
          menuStatus: "close",
          style: "menu active",
        })
        break
      case "close":
        this.setState({
          menuStatus: "open",
          style: "menu",
        })
        break
    }
  }

  render(props) {
    return (
      <div className="side_bar">
        <div onClick={this.handleClick} className="hamburger">
          {this.state.style === "menu active" ? (
            <div className="mobile_menu_exit">
              <img className="exit" src={Exit} />
            </div>
          ) : (
            <div className="hamburger">
              <div className="mobile_menu">
                <img src={MenuIcon} className="menu_icon" />
              </div>
              <img src={Menu} className="menu_text" />
            </div>
          )}
        </div>
        <div className={this.state.style}>
          <ul className="sidebar_links">
            {navLinks.map(({ url, name, className }) => (
              <li className={`${className} nav_link`}>
                <a
                  className={`${className}_link`}
                  onClick={this.handleClick}
                  href={url}
                >
                  {name}
                </a>
              </li>
            ))}
            <div className="social_icons">
              {[
                {
                  social: Facebook,
                  link: "https://facebook.com/zubair.iqbal.5",
                },
                { social: Twitter, link: "https://twitter.com/izubairiqbal" },
                {
                  social: Instagram,
                  link: "https://www.instagram.com/zubair_1qbal/",
                },
              ].map((i, index) => (
                <a href={i.link} target="_blank">
                  <img
                    className="social_images"
                    src={i.social}
                    alt={i.social}
                  />
                </a>
              ))}
            </div>
            <Info className="sidebar_info" />
          </ul>
          <BreifMe className="breifMe" />
        </div>
      </div>
    )
  }
}
