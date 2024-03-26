import React from "react";
import "./SkillCard.css";

const SkillCard = ({ title, skills }) => {
  return (
    <div className="skill-card">
      <div className="skill-title">{title}</div>
      <div className="skill-list">
        {skills.map((item) => (
            <div key={item.name} className="skill-item">
            <img className="skill-img" src={item.image} alt="image"></img>
                {item.name}
            </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;