import React, { useEffect } from "react"
import Line from "../../assets/svgs/line.svg"
import WOW from "wowjs"
import "./styles.scss"

export default function SkillsBanner() {
  useEffect(() => {
    new WOW.WOW().init()
  }, [])
  return (
    <div className="skills_container">
      <div className="skills_container_wrapper">
        <div className="skills_first">
          <h1 className="skills_text wow fadeInDown" data-wow-duration="1.5s">
            Skills.
          </h1>
        </div>
        <div className="skills_last">
          <div className="info_wrapper wow fadeInUp" data-wow-duration="1.5s">
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
