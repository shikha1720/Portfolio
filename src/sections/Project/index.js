import React, {useState} from 'react'
import './style.css'
import Container from '../../components/Container/Container'
import Wapper from '../../components/Wapper/Wapper'
import { Heading } from "../../components/SectionHeading/SectionHeading";
import ProjectCard from '../../components/Cards/ProjectCard/ProjectCard'
import ProjectDetailCard from '../../components/Cards/ProjectDetailCard/ProjectDetailCard';
import { projects } from '../../data/myData'

const Projects = () => {
  const [openProjectDetails, setOpenProjectDetails] = useState({
    state : false,
    projectDetails : null
  })

  return (
    <div id="projects">

    <Container>
      <Wapper>
        <Heading heading="Projects" />
        {/* <SubTitle subTitle="desc" /> */}
        <div className="projectCardContainer">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} setOpenProjectDetails={setOpenProjectDetails}/>
          ))}
        </div>

        {openProjectDetails.state && <ProjectDetailCard project={openProjectDetails.projectDetails} setOpenProjectDetails={setOpenProjectDetails}/>}
        
      </Wapper>
    </Container>
    </div>
  )
}

export default Projects
