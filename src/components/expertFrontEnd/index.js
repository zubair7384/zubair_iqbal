import React, { useState, useEffect } from "react"
import H2 from "../h2"
import H3 from "../h3"
import P from "../p"
import Button from "../button"
import Line from "../../assets/svgs/line.svg"
import WhiteLine from "../../assets/svgs/white-line.svg"
import AOS from "aos"
import "aos/dist/aos.css"

import "./styles.scss"

export default function ExpertFrontEnd() {
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => setOffsetY(window.pageYOffset)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  })

  const hasWindow = typeof window !== "undefined" ? true : false

  return (
    <div className="front_end_container">
      <div
        className="front_end_wrapper"
        style={
          hasWindow && window.innerWidth > 768
            ? { transform: `translateY(${offsetY * 0.07}px)` }
            : { transform: `translateY(${offsetY * 0}px)` }
        }
      >
        <img data-aos="fade-left" src={Line} />
        <H2 dataAos="fade-up" className="front_text" heading="FRONT END." />
        <H3
          dataAos="fade-up"
          className="headingThree_wrapper"
          headingOne="Expert in"
          headingTwo="frontend"
          headingThree="solutions."
        />
        <P
          dataAos="fade-up"
          className="para_wrapper"
          para="I believe in creating the best frontend user experiences by
            leveraging the cutting edge tech available. I have a keen eye for
            engineering the perfect user interfaces."
        />
        <P
          dataAos="fade-up"
          className="para_wrapper"
          para="So far, I’ve worked on some of the most challenging problems in
            creating modern fronend solutions."
        />
        <span className="my_skills" data-aos="fade-left">
          <Button text="My Skills" href="https://github.com/zubair7384" />
        </span>
      </div>
      <div
        className="solutions_wrapper"
        style={
          hasWindow && window.innerWidth > 768
            ? { transform: `translateY(-${offsetY * 0.1}px)` }
            : { transform: `translateY(-${offsetY * 0}px)` }
        }
      >
        <div className="row">
          {[
            {
              title: "Coding",
              para: "Fluent in some of the latest fronend web framworks.",
            },
            {
              title: "Collaboration ",
              para: " A team player with quick & timely delivery.",
            },
            {
              title: "Professional",
              para: "Professionally sound attitude & outlook.",
            },
            {
              title: "Development ",
              para: " Forward looking with constant skill development. ",
            },
          ].map(({ title, para }) => (
            <div className="solutions" data-aos="fade-left">
              <img src={WhiteLine} />
              <h3 className="title">{title}</h3>
              <p className="para"> {para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
