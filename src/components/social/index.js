import React from "react"
import { Link } from "gatsby"

import Facebook from "../../assets/svgs/facebook.svg"
import Instagram from "../../assets/svgs/instagram.svg"
import Twitter from "../../assets/svgs/twitter.svg"
import Home from "../../assets/svgs/home.svg"
import "./styles.scss"

export default function Social() {
  return (
    <div className="social_container">
      <div className="social_icons">
        {[
          { social: Facebook, link: "https://facebook.com/zubair.iqbal.5" },
          {
            social: Instagram,
            link: "https://www.instagram.com/zubair_1qbal/",
          },
          { social: Twitter, link: "https://twitter.com/izubairiqbal" },
          { social: Home, link: "/" },
        ].map((i, index) => (
          <Link to={i.link}>
            <a href={i.link} target="_blank">
              <img
                key={index}
                className="social_images"
                src={i.social}
                alt={i.social}
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
