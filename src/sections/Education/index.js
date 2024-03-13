import React from 'react'
import './style.css'
import Container from '../../components/Container/Container'
import Wapper from '../../components/Wapper/Wapper'
import Card from '../../components/Cards/EducationCard/Card'
import { education } from '../../data/myData'
import { Heading , SubHeading } from "../../components/SectionHeading/SectionHeading";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const Education = () => {
  return (
    <div id="education">

    <Container>
      <Wapper>
      <Heading heading="Education" />
        <div className="education-timeline-section">
          <Timeline>
            {education.map((education,index) => (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  <TimelineConnector style={{ background: "#854CE6" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Card education={education} key={index}/>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </Wapper>
    </Container>
    </div>
  )
}

export default Education
