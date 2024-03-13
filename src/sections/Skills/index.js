import React from 'react'
import "./style.css";
import { skills } from "../../data/myData";
import { Heading, SubHeading} from "../../components/SectionHeading/SectionHeading";
import Container from "../../components/Container/Container";
import Wapper from "../../components/Wapper/Wapper";
import SkillCard from "../../components/Cards/SkillCard/SkillCard";


const Skills = () => {
  return (
    <div id="skills">
    <Container>
      <Wapper>
        <Heading heading="Skills" />
        <SubHeading subHeading="" />
        <div className="skill-container">
          {skills.map((skill,index) => (
            <SkillCard key={index} title={skill.title} skills={skill.skills} />
          ))}
        </div>
      </Wapper>
    </Container>
    </div>
  )
}

export default Skills
