import React, { useState, useEffect } from "react"
import H2 from "../h2"
import H3 from "../h3"
import P from "../p"
import Line from "../../assets/svgs/line.svg"
import Design from "../../assets/svgs/design.svg"
import WOW from "wowjs"
import window from "global"
import "./styles.scss"

export default function InspireDesign() {
  const mySpecialWindowFunction = () => {
    /* START HACK */
    if (!process.env.BROWSER) {
      global.window = {} // Temporarily define window for server-side
    }
    /* END HACK */

    return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
  }
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => setOffsetY(window.pageYOffset)
  useEffect(() => {
    new WOW.WOW().init()
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="inspire_container flex">
      <div className="inspire_wrapper">
        <div className="text_wrapper">
          <img
            className="img animate__animated animate__fadeInLeft"
            src={Line}
            ali="line"
          />
          <H2 className="inspire_text wow fadeInUp" heading="INSPIRE design." />
        </div>
        <div className="inspire_image_wrapper">
          <img
            className="inspire_image wow fadeInLeft"
            src={Design}
            alt="design"
          />
        </div>
      </div>
      <div
        className="translating_wrapper"
        style={
          window.innerWidth > 768
            ? { transform: `translateY(${offsetY * 0.2}px)` }
            : { transform: `translateY(${offsetY * 0}px)` }
        }
      >
        <H3
          className="wow fadeInUp"
          headingOne="Translating"
          headingTwo="inspiring"
          headingThree="designs."
        />
        <P
          className="paragraph"
          para="I truly believe in the power of design to influence. Designs that inspire have the most lasting affect on users. I help translate the vision of designers into working user interfaces. "
        />
        <P
          className="paragraph"
          para="I fully understand the process of UX design that helps me to accurately bring those designs into life. "
        />
        <span className="my_skills">
          <a href="https://github.com/zubair7384" target="_blank">
            My Work
          </a>
        </span>
      </div>
    </div>
  )
}
