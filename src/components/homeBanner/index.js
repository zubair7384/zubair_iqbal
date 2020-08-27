import React, { useState, useEffect, useRef } from "react"
import Hello from "../../assets/svgs/hello.svg"
import Facebook from "../../assets/svgs/facebook.svg"
import Instagram from "../../assets/svgs/instagram.svg"
import Twitter from "../../assets/svgs/twitter.svg"
import Arrow from "../../assets/svgs/arrow.svg"
import Scroll from "../../assets/svgs/scroll.svg"
import Line from "../../assets/svgs/line.svg"
import "animate.css"
import "./styles.scss"

export default function HomeBanner() {
  const prevScrollY = useRef(0)

  const [goingUp, setGoingUp] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = typeof window !== "undefined" && window.scrollY
  //     if (prevScrollY.current > currentScrollY && goingUp) {
  //       setGoingUp(false)
  //     }
  //     if (prevScrollY.current < currentScrollY && !goingUp) {
  //       setGoingUp(true)
  //     }

  //     prevScrollY.current = currentScrollY
  //     console.log(goingUp, typeof window !== "undefined" && window.scrollY)
  //   }

  //   typeof window !== "undefined" &&
  //     window.addEventListener("scroll", handleScroll, { passive: true })

  //   return () =>
  //     typeof window !== "undefined" &&
  //     window.removeEventListener("scroll", handleScroll)
  // }, [goingUp])
  return (
    <div className="container">
      <div className="social_icons">
        {[
          { social: Facebook, link: "https://facebook.com/zubair.iqbal.5" },
          { social: Twitter, link: "https://twitter.com/izubairiqbal" },
          {
            social: Instagram,
            link: "https://www.instagram.com/zubair_1qbal/",
          },
        ].map((i, index) => (
          <a href={i.link} target="_blank">
            <img className="social_images" src={i.social} alt={i.social} />
          </a>
        ))}
      </div>
      <div
      // className={`${
      //   goingUp && typeof window !== "undefined" && window.scrollY > 1
      //     ? "container_wrapper fixed"
      //     : "container_wrapper"
      // } ${
      //   typeof window !== "undefined" && window.scrollY > 50
      //     ? "container_wrapper relative"
      //     : "container_wrapper"
      // }`}
      >
        {/* <div className="first_row">
          <img
            src={Hello}
            className={
              goingUp ? "first_row_svg_scroll first_row_svg" : "first_row_svg"
            }
          />
          <div
            className={
              !goingUp ? "scroll_info_wrapper info_wrapper" : "info_wrapper"
            }
          >
            <span
              className={
                !goingUp
                  ? "animate__animated animate__fadeLeftBig"
                  : "animate__animated animate__fadeInDown"
              }
            >
              <img src={Line} />
              <p className="dob">Born 1994</p>
            </span>
            <div
              className={
                goingUp
                  ? "animate__animated animate__fadeInUp"
                  : "animate__animated animate__fadeInDown"
              }
            >
              <h2>A Frontend Developer</h2>
              <p>experienced in modern website technology & solutions.</p>
            </div>
          </div>
          <div className="scroll_down">
            <img src={Scroll} className="scroll" />
            <img src={Arrow} className="arrow" />
          </div>
        </div>
        <div
          className={`${goingUp ? "second_row scrolling" : "second_row"}`}
        ></div> */}
      </div>
    </div>
  )
}
