import React, { useState, useEffect } from "react"
import H2 from "../h2"
import H3 from "../h3"
import P from "../p"
import Line from "../../assets/svgs/line.svg"
import Design from "../../assets/svgs/design.jpg"
import AOS from "aos"
import "aos/dist/aos.css"
import "./styles.scss"

export default function InspireDesign() {
  const [offsetY, setOffsetY] = useState(0)
  const hasWindow = typeof window !== "undefined" ? true : false
  const handleScroll = () => setOffsetY(hasWindow && window.pageYOffset)
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
    hasWindow && window.addEventListener("scroll", handleScroll)

    return () => hasWindow && window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="inspire_container flex">
      <div className="inspire_wrapper">
        <div className="text_wrapper">
          <img
            data-aos="fade-right"
            className="img animate__animated animate__fadeInLeft"
            src={Line}
            ali="line"
          />
          <H2
            dataAos="fade-up"
            className="inspire_text"
            heading="INSPIRE design."
          />
        </div>
        <div className="inspire_image_wrapper">
          <img
            data-aos="fade-right"
            className="inspire_image"
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
          dataAos="fade-up"
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
