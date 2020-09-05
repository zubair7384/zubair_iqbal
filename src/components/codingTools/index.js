import React, { useEffect } from "react"
import H2 from "../../components/h2"
import Line from "../../assets/svgs/line.svg"
import Tools from "../../assets/svgs/tools.svg"
import AOS from "aos"
import "aos/dist/aos.css"
import "./styles.scss"

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])
  return (
    <div className="skills_container">
      <div className="skills_row">
        <div className="heading_wrapper">
          <img data-aos="fade-right" className="img" src={Line} ali="line" />
          <H2
            dataAos="fade-left"
            headingClass="right_tools_heading"
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
              <h3 className="skill_title" data-aos="fade-up">
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
                  <li data-aos="fade-up" className="skill_list" key={index}>
                    {i}
                  </li>
                </ul>
              ))}
            </div>
            <div>
              <span className="dot">.</span>
              <h3
                data-aos="fade-up"
                className="skill_title"
                data-wow-duration="1.5s"
              >
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
                  <li data-aos="fade-up" className="skill_list" key={index}>
                    {i}
                  </li>
                </ul>
              ))}
            </div>
            <div>
              <span className="dot">.</span>
              <h3 data-aos="fade-up" className="skill_title">
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
                  <li data-aos="fade-up" className="skill_list" key={index}>
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
