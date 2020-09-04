import React from "react"
import { Link } from "gatsby"
import BreifMe from "../breifMe"
import Info from "../info"
import MenuIcon from "../../assets/svgs/menu-icon.svg"
import Exit from "../../assets/svgs/exit.svg"
import Twitter from "../../assets/svgs/twitter.svg"
import Facebook from "../../assets/svgs/facebook.svg"
import Instagram from "../../assets/svgs/instagram.svg"
import window from "global"
import "animate.css"

import "./styles.scss"

const navLinks = [
  { link: "skills", name: "Skills.", className: "skills" },
  { link: "/", name: "Home.", className: "home" },
  {
    link: "https://github.com/zubair7384",
    target: "_blank",
    name: "My Work.",
    className: "my_work",
  },
  {
    link: "https://wa.me/0923448585803",
    target: "_blank",
    name: "Contact.",
    className: "contact",
  },
]

const mySpecialWindowFunction = () => {
  /* START HACK */
  if (!process.env.BROWSER) {
    global.window = {} // Temporarily define window for server-side
  }
  /* END HACK */

  return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
}
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
    if (this.state.menuStatus !== "open") {
      window.onscroll = function () {
        window.scrollTo(0, 0)
      }
    } else {
      window.onscroll = function () {
        window.scrollTo()
      }
    }
    return (
      <div
        className={
          this.state.menuStatus === "open" ? "side_bar w-8" : "side_bar w-98"
        }
      >
        <div
          className={
            window.location.pathname === "/skills"
              ? "sidebar_background yellow"
              : "sidebar_background"
          }
          style={
            this.state.menuStatus === "open"
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
        >
          <div
            onClick={this.handleClick}
            className={
              this.state.menuStatus === "open" ? "hamburger" : "hamburger_hover"
            }
          >
            {this.state.style === "menu active" ? (
              <div className="mobile_menu_exit">
                <img className="exit" src={Exit} />
              </div>
            ) : (
              <div className="hamburger">
                <div className="mobile_menu">
                  <img src={MenuIcon} className="menu_icon" />
                </div>
                <div className="menu_text">
                  <p className="m">M</p>
                  <p className="e">E</p>
                  <p className="n">N</p>
                  <p className="u">U</p>
                </div>
              </div>
            )}
          </div>
          <div className={this.state.style}>
            <ul className="sidebar_links">
              {navLinks.map(({ name, className, link, target }) => (
                <li className={`${className} nav_link`}>
                  <Link to={link}>
                    <a
                      className={`${className}_link`}
                      onClick={this.handleClick}
                      href={link}
                      target={target}
                    >
                      {name}
                    </a>
                  </Link>
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
      </div>
    )
  }
}
