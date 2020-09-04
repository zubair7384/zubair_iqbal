import React from "react"
import H2 from "../h2"
import H3 from "../h3"
import P from "../p"
import Line from "../../assets/svgs/line.svg"
import Ideas from "../../assets/svgs/idea.svg"
import IdeasMobile from "../../assets/svgs/ideaMobile.svg"
// import WOW from "wowjs"
import "./styles.scss"

export default class CraftingIdeas extends React.Component {
  // componentDidMount() {
  //   new WOW.WOW().init()
  // }

  render() {
    const hasWindow = typeof window !== "undefined" ? true : false
    return (
      <div className="crafting_container">
        <img className="wow fadeInLeft crafting_line" src={Line} alt="line" />
        <H2 heading="CRAFTING ideas." className="crafting_text wow fadeInUp" />
        {hasWindow && window.screen.width < 576 ? (
          <img className="ideas_image" src={IdeasMobile} alt="ideas" />
        ) : (
          <img className="ideas_image" src={Ideas} alt="ideas" />
        )}
        <div className="stitching_wrapper">
          <H3
            className="wow fadeInUp stitching_text"
            headingOne="Stitching your"
            headingTwo="ideas"
            headingThree="together."
          />
          <P
            className="para wow fadeInUp "
            para="Turn your ideas into reality. Let me help you stitch your ideas together, creating your design into perfect frontend user interfaces. "
          />
          <div>
            <P
              className="para wow fadeInUp "
              para="Create a great frontend for your web apps or websites in some of the latest JavaScript based fronend web framworks."
            />
            <span className="breif_me wow fadeInUp">Breif Me</span>
          </div>
        </div>
      </div>
    )
  }
}
