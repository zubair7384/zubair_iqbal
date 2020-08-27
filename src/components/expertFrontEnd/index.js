import React from "react"
import H2 from "../h2"
import H3 from "../h3"
import P from "../p"
import Line from "../../assets/svgs/line.svg"
import WhiteLine from "../../assets/svgs/white-line.svg"
import WOW from "wowjs"
import "./styles.scss"

export default class ExpertFrontEnd extends React.Component {
  // componentDidMount() {
  //   new WOW.WOW().init()
  // }
  render() {
    return (
      <div className="front_end_container">
        <div className="front_end_wrapper">
          <img className="wow fadeInLeft" src={Line} />
          <H2 className=" wow fadeInUp front_text" heading="FRONT END." />
          <H3
            className="wow fadeInUp headingThree_wrapper"
            headingOne="Expert in"
            headingTwo="frontend"
            headingThree="solutions."
          />
          <P
            className="para_wrapper"
            para="I believe in creating the best frontend user experiences by
            leveraging the cutting edge tech available. I have a keen eye for
            engineering the perfect user interfaces."
          />
          <P
            className="para_wrapper"
            para="So far, I’ve worked on some of the most challenging problems in
            creating modern fronend solutions."
          />
          <span className="my_skills">My Skills</span>
        </div>
        <div
          className="solutions_wrapper wow fadeInRight"
          data-wow-offset="100"
          data-wow-delay=".2s"
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
              <div className="solutions">
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
}
