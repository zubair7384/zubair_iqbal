import React from "react"
import Zubair from "../../assets/svgs/zubair.png"
import "./styles.scss"

export default function CodeSkill() {
  return (
    <div className="codeskill_container">
      <div className="codeskill_wrapper">
        <div className="code_text_wrapper">
          <h1 className="code_text">CODE IS SKILL</h1>
        </div>
        <div className="my_image_wrapper">
          <img className="my_image" src={Zubair} alt="zubair" />
        </div>
      </div>
    </div>
  )
}
