import React from "react"
import H2 from "../h2"
import H3 from "../h3"
import P from "../p"
import Line from "../../assets/svgs/line.svg"
import Ideas from "../../assets/svgs/idea.jpg"
import IdeasMobile from "../../assets/svgs/ideaMobile.jpg"
import AOS from "aos"
import "aos/dist/aos.css"
import "./styles.scss"

export default class CraftingIdeas extends React.Component {
  componentDidMount() {
    new AOS.init({
      duration: 2000,
    })
  }

  render() {
    const hasWindow = typeof window !== "undefined" ? true : false
    return (
      <div className="crafting_container">
        <img
          data-aos="fade-left"
          className="crafting_line"
          src={Line}
          alt="line"
        />
        <H2
          dataAos="fade-up"
          heading="CRAFTING ideas."
          className="crafting_text"
        />
        {hasWindow && window.screen.width < 576 ? (
          <img className="ideas_image" src={IdeasMobile} alt="ideas" />
        ) : (
          <img className="ideas_image" src={Ideas} alt="ideas" />
        )}
        <div className="stitching_wrapper">
          <H3
            dataAos="fade-up"
            className="stitching_text"
            headingOne="Stitching your"
            headingTwo="ideas"
            headingThree="together."
          />
          <P
            dataAos="fade-up"
            className="para"
            para="Turn your ideas into reality. Let me help you stitch your ideas together, creating your design into perfect frontend user interfaces. "
          />
          <div>
            <P
              dataAos="fade-up"
              className="para "
              para="Create a great frontend for your web apps or websites in some of the latest JavaScript based fronend web framworks."
            />
            <span data-aos="fade-up" className="breif_me">
              <a href="https://wa.me/0923448585803" target="_blank">
                Breif Me
              </a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
