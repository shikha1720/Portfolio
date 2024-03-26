import React from 'react'
import './Card.css'

const Card = ({experience, education}) => {
  return (
    <div className="card">
        <div className="top">
            <img src={experience?.image || education?.image} alt="Img" className="card-img" />
            <div className="body">
                {(experience?.role || education?.school) && <div className="card-title">{experience?.role || education?.school}</div>}
                {(experience?.company || education?.degree) && <div className="card-subTitle"><b>{experience?.company || education?.degree}</b></div>}
                {(experience?.date || education?.date) && <div className="card-date">{experience?.date || education?.date}</div>}
            </div>
        </div>
        {education?.grade && <div className='card-subTitle2' ><b>Grade: </b>{education?.grade}</div>}
        {(experience?.desc || education?.desc) && <div className="card-description">
            <span>{experience?.desc || education?.desc} </span>
        </div>}
        {experience?.skills && 
        <div className="card-skills">
            <b>Skills: </b>
            <div className="card-skills-items">
                {experience?.skills?.map((skill, index) => (
                    <div key={skill} className="card-skills-item">• {skill}</div>
                ))}
            </div>
        </div>
        

        }
    </div>
  )
}

export default Card