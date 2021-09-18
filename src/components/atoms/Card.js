import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink, githubLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="card-wrapper">
        <div className="content">
          <div className="project-title">
            <h2>{heading}</h2>
          </div>
          <p className="project-text">{paragraph}</p>
          {/* BUTTONS */}
          <div className="button-wrapper">
            <a
              href={projectLink ? projectLink : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn card__btn"
            >
              Launch
            </a>
            <a
              href={githubLink ? githubLink : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn card__btn"
            >
              Repo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
