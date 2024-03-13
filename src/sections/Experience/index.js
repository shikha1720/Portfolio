import React from "react";
import "./style.css";
import { Heading, SubHeading } from "../../components/SectionHeading/SectionHeading";
import Card from "../../components/Cards/EducationCard/Card";
import { experiences } from "../../data/myData";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Container from '../../components/Container/Container';
import Wapper from '../../components/Wapper/Wapper';

const Experience = () => {
  return (
    <div id="experience">

    <Container>
      <Wapper>
        <Heading heading="Experience" />
        <div className="experience-timeline-section">
          <Timeline>
            {experiences.map((experience,index) => (
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  <TimelineConnector style={{ background: "#854CE6" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <Card experience={experience} key={index}/>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </Wapper>
    </Container>
    </div>
  );
};

export default Experience;