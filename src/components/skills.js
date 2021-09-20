import React from "react"
import data from "../mydata"
import Fade from "react-reveal/Fade"

const Skills = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="skills-container">
          <Fade bottom>
            <h1>Skills</h1>
          </Fade>
          <div className="skills-grid">
            <Fade bottom cascade>
              {data.skills.map((skill, index) => (
                <div className="skill" key={index}>
                  <img src={skill.img} alt="css"></img>
                  <p>{skill.para}</p>
                </div>
              ))}
            </Fade>
          </div>
          <h2>...and more coming soon!</h2>
        </div>
      </div>
    </div>
  )
}

export default Skills
