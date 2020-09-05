import React, { useState, useEffect } from "react"
import H2 from "../h2"
import H3 from "../h3"
import P from "../p"
import Line from "../../assets/svgs/line.svg"
import Design from "../../assets/svgs/design.jpg"
import WOW from "wowjs"
import "./styles.scss"

export default function InspireDesign() {
  const [offsetY, setOffsetY] = useState(0)
  const hasWindow = typeof window !== "undefined" ? true : false
  const handleScroll = () => setOffsetY(hasWindow && window.pageYOffset)
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs")
    }

    new WOW.WOW().init()
    hasWindow && window.addEventListener("scroll", handleScroll)

    return () => hasWindow && window.removeEventListener("scroll", handleScroll)
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
          hasWindow && window.innerWidth > 768
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
