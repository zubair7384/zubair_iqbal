import React, { useEffect } from "react"
import H2 from "../../components/h2"
import Line from "../../assets/svgs/line.svg"
import P from "../../components/p"
import AOS from "aos"
import "aos/dist/aos.css"
import "./styles.scss"

export default function RightTools() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  return (
    <div className="right_tools_container">
      <div className="tools_row">
        <div className="tools_col">
          <div className="tools_wrapper">
            <img data-aos="fade-left" className="img" src={Line} ali="line" />
            <H2
              dataAos="fade-up"
              headingClass="right_tools_heading"
              spanClassName="tools"
              heading="EQUIPPED right"
              headingTwo=" tools."
            />
            <P
              dataAos="fade-up"
              para="I’m quipped with the right tools to create some of the best, visually attractive user interfaces. My core expertise starts with JavaScript proficiency and extends to some of the most popular frontend frameworks. "
            />
            <P
              dataAos="fade-up"
              para="In order to inject a holistic, best possible user experience to my projects, I’ve acquired substaintial experience in a variety of UI & animation libraries."
            />
            <P dataAos="fade-up" para="Attention to detail is my forte. " />
          </div>
        </div>
        <div className="tools_boxes">
          <div className="tools_col">
            <div className="boxes_wrapper">
              <div
                data-aos="zoom-out"
                className="box_1 box"
                data-aos-duration="1s"
              ></div>
              <div
                data-aos="zoom-in"
                className="box_2 box"
                data-aos-duration="1.5s"
              ></div>
              <div
                data-aos="zoom-out"
                className="box_3 box"
                data-aos-duration="2s"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
