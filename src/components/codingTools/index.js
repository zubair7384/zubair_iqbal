import React, { useEffect } from "react"
import H2 from "../../components/h2"
import Line from "../../assets/svgs/line.svg"
import Tools from "../../assets/svgs/tools.svg"
import WOW from "wowjs"
import "./styles.scss"

export default function Skills() {
  useEffect(() => {
    new WOW.WOW().init()
  }, [])
  return (
    <div className="skills_container">
      <div className="skills_row">
        <div className="heading_wrapper">
          <img className="img wow fadeInRight" src={Line} ali="line" />
          <H2
            headingClass="right_tools_heading wow fadeInLeft"
            spanClassName="tools"
            heading="Tools."
          />
        </div>
        <div className="tools_row">
          <div className="image_col">
            <img className="tools_image" src={Tools} alt="tools" />
          </div>
          <div className="skills_col">
            <div>
              <span className="dot">.</span>
              <h3 className="skill_title wow fadeInUp" data-wow-duration="1.5s">
                Coding.
              </h3>
              {[
                "JavaScript",
                "Typescript",
                "HTML5",
                "CSS3",
                "React",
                "Gatsby",
              ].map((i, index) => (
                <ul>
                  <li
                    className="skill_list wow fadeInUp"
                    data-wow-duration="3s"
                    key={index}
                  >
                    {i}
                  </li>
                </ul>
              ))}
            </div>
            <div>
              <span className="dot">.</span>
              <h3 className="skill_title wow fadeInUp" data-wow-duration="1.5s">
                Style.
              </h3>
              {[
                "React Bootstrap",
                "Foundation",
                "Bootstrap",
                "Ant Design",
                "Material UI",
                "Sass",
              ].map((i, index) => (
                <ul>
                  <li
                    className="skill_list wow fadeInUp"
                    data-wow-duration="3s"
                    key={index}
                  >
                    {i}
                  </li>
                </ul>
              ))}
            </div>
            <div>
              <span className="dot">.</span>
              <h3 className="skill_title wow fadeInUp" data-wow-duration="1.5s">
                DevOps.
              </h3>
              {[
                "Netlify",
                "Vercel",
                "GitHub",
                "Bitbucket",
                "GitLab",
                "Git",
              ].map((i, index) => (
                <ul>
                  <li
                    className="skill_list wow fadeInUp"
                    data-wow-duration="3s"
                    key={index}
                  >
                    {i}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
