import React from "react"
import H2 from "../h2"
import H3 from "../h3"
import P from "../p"
import Line from "../../assets/svgs/line.svg"
import Design from "../../assets/svgs/design.svg"
import WOW from "wowjs"
import "./styles.scss"

export default class InspireDesign extends React.Component {
  // componentDidMount() {
  //   new WOW.WOW().init()
  // }
  render() {
    return (
      <div className="inspire_container flex">
        <div className="inspire_wrapper">
          <div className="text_wrapper">
            <img className="img wow fadeInLeft" src={Line} ali="line" />
            <H2
              className="inspire_text wow fadeInUp"
              heading="INSPIRE design."
            />
          </div>
          <img
            className="inspire_image wow fadeInLeft"
            src={Design}
            alt="design"
          />
        </div>
        <div className="translating_wrapper">
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
          <span className="my_skills">My Work</span>
        </div>
      </div>
    )
  }
}
