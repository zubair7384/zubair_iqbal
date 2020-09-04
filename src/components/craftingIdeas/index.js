import React from "react"
import H2 from "../h2"
import H3 from "../h3"
import P from "../p"
import Line from "../../assets/svgs/line.svg"
import Ideas from "../../assets/svgs/idea.svg"
import IdeasMobile from "../../assets/svgs/ideaMobile.svg"
import WOW from "wowjs"
import window from "global"
import "./styles.scss"

const mySpecialWindowFunction = () => {
  /* START HACK */
  if (!process.env.BROWSER) {
    global.window = {} // Temporarily define window for server-side
  }
  /* END HACK */

  return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
}
export default class CraftingIdeas extends React.Component {
  componentDidMount() {
    new WOW.WOW().init()
  }

  render() {
    return (
      <div className="crafting_container">
        <img className="wow fadeInLeft crafting_line" src={Line} alt="line" />
        <H2 heading="CRAFTING ideas." className="crafting_text wow fadeInUp" />
        {window.screen.width < 576 ? (
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
