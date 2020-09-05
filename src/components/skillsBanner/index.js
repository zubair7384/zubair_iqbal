import React, { useEffect } from "react"
import Line from "../../assets/svgs/line.svg"
import AOS from "aos"
import "aos/dist/aos.css"
import "./styles.scss"

export default function SkillsBanner() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])
  return (
    <div className="skills_container">
      <div className="skills_container_wrapper">
        <div className="skills_first">
          <h1 data-aos="fade-down" className="skills_text">
            Skills.
          </h1>
        </div>
        <div className="skills_last">
          <div data-aos="fade-up" className="info_wrapper">
            <span>
              <img src={Line} />
              <p className="dob">JavaScript.</p>
            </span>
            <div>
              <h2>Essential frontend skills</h2>
              <p>JSdev. skilled in frontend frameworks.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
