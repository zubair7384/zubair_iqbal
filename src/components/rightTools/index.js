import React, { useEffect } from "react"
import H2 from "../../components/h2"
import Line from "../../assets/svgs/line.svg"
import P from "../../components/p"
// import WOW from "wowjs"
import "./styles.scss"

export default function RightTools() {
  // useEffect(() => {
  //   new WOW.WOW().init()
  // }, [])

  return (
    <div className="right_tools_container">
      <div className="tools_row">
        <div className="tools_col">
          <div className="tools_wrapper">
            <img className="img wow fadeInLeft" src={Line} ali="line" />
            <H2
              headingClass="right_tools_heading wow fadeInUp"
              spanClassName="tools"
              heading="EQUIPPED right"
              headingTwo=" tools."
            />
            <P para="I’m quipped with the right tools to create some of the best, visually attractive user interfaces. My core expertise starts with JavaScript proficiency and extends to some of the most popular frontend frameworks. " />
            <P para="In order to inject a holistic, best possible user experience to my projects, I’ve acquired substaintial experience in a variety of UI & animation libraries." />
            <P para="Attention to detail is my forte. " />
          </div>
        </div>
        <div className="tools_boxes">
          <div className="tools_col">
            <div className="boxes_wrapper">
              <div
                className="box_1 box wow heartBeat"
                data-wow-duration="1s"
              ></div>
              <div
                className="box_2 box wow heartBeat"
                data-wow-duration="1.5s"
              ></div>
              <div
                className="box_3 box wow heartBeat"
                data-wow-duration="2s"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
