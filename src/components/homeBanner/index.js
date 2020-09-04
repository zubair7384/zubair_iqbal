import React, { useState, useEffect, useRef } from "react"
import Hello from "../../assets/svgs/hello.svg"
import Facebook from "../../assets/svgs/facebook.svg"
import Instagram from "../../assets/svgs/instagram.svg"
import Twitter from "../../assets/svgs/twitter.svg"
import Arrow from "../../assets/svgs/arrow.svg"
import Scroll from "../../assets/svgs/scroll.svg"
import Line from "../../assets/svgs/line.svg"
import window from "global"
import "animate.css"
import "./styles.scss"

export default function HomeBanner() {
  const prevScrollY = useRef(0)

  const [goingUp, setGoingUp] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (prevScrollY.current > currentScrollY && goingUp) {
        setGoingUp(false)
      }
      if (prevScrollY.current < currentScrollY && !goingUp) {
        setGoingUp(true)
      }

      prevScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [goingUp])

  const mySpecialWindowFunction = () => {
    /* START HACK */
    if (!process.env.BROWSER) {
      global.window = {} // Temporarily define window for server-side
    }
    /* END HACK */

    return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
  }
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
        className={`${
          goingUp && window.scrollY > 1
            ? "container_wrapper fixed"
            : "container_wrapper"
        } ${
          window.scrollY > 50
            ? "container_wrapper relative"
            : "container_wrapper"
        }`}
      >
        <div className="first_row">
          <svg
            className="first_row_svg"
            width="428"
            height="343"
            viewBox="0 0 428 343"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M21.5732 0.0100098V151.625"
                stroke="#1C1B20"
                stroke-width="40.8963"
              />
              <path
                d="M21.5732 73.8228H103.037"
                stroke="#1C1B20"
                stroke-width="40.8963"
              />
              <path
                d="M103.037 0.0100098V151.625"
                stroke="#1C1B20"
                stroke-width="40.8963"
              />
              <path
                d="M167.872 0.0100098V151.625"
                stroke="#1C1B20"
                stroke-width="40.8963"
              />
              <path
                d="M167.872 19.4507H245.336"
                stroke="#1C1B20"
                stroke-width="40.8963"
              />
              <path
                d="M167.872 75.8177H240.348"
                stroke="#1C1B20"
                stroke-width="40.8963"
              />
              <path
                d="M167.872 131.167H245.336"
                stroke="#1C1B20"
                stroke-width="40.8963"
              />
              <path
                d="M21.5732 186.208V337.823"
                stroke="#1C1B20"
                stroke-width="40.8963"
              />
              <path
                d="M21.5732 317.365H94.0594"
                stroke="#1C1B20"
                stroke-width="40.8963"
              />
              <path
                d="M128.302 186.208V337.823"
                stroke="#1C1B20"
                stroke-width="40.8963"
              />
              <path
                d="M128.302 317.365H200.788"
                stroke="#1C1B20"
                stroke-width="40.8963"
              />
              <path
                d="M282.92 322.552C316.348 322.552 343.447 295.453 343.447 262.025C343.447 228.598 316.348 201.499 282.92 201.499C249.492 201.499 222.394 228.598 222.394 262.025C222.394 295.453 249.492 322.552 282.92 322.552Z"
                stroke="#1C1B20"
                stroke-width="40.8963"
              />
              <path
                d="M402.277 340.816C416.419 340.816 427.882 329.352 427.882 315.211C427.882 301.069 416.419 289.605 402.277 289.605C388.136 289.605 376.672 301.069 376.672 315.211C376.672 329.352 388.136 340.816 402.277 340.816Z"
                fill="#3FBAC2"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="428" height="343" fill="white" />
              </clipPath>
            </defs>
          </svg>
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
              <p className="dob">Born 1996</p>
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
          <div className="scroll_down animate__animated animate__fadeInUp">
            <img src={Scroll} className="scroll" />
            <img src={Arrow} className="arrow" />
          </div>
        </div>
        <div
          className={`${goingUp ? "second_row scrolling" : "second_row"}`}
        ></div>
      </div>
    </div>
  )
}
