import React, { useEffect } from "react";
import {
  MainContainer,
  MainBg,
  TextHeadline,
  ExperianceWrapper,
  Container,
  Title,
  Circle,
  Date,
  P, 
  Main
} from "./ExperianceElements";
import Aos from "aos";
import "aos/dist/aos.css";
import Tag from "../images/TagIcon.png";
const ExperianceSection = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <MainContainer id={"experiance"}>
        <ExperianceWrapper>
          <TextHeadline data-aos="fade-up">
            {" "}
            My Experiance <img src={Tag} />
          </TextHeadline>
          <Main>
          <Container className="container">
            <ul>
              <li>
                  <span data-aos="zoom-out">
                <Title>Full Stack Web Developer</Title>
                <P>
                    A Python Trainee at Tuwaiq Academy Where I learned Back-end and Front-end development.
                </P>
                <P style={{color: `rgb(197,141,229)`}}> Django | React.js | Netlify | Heroku | REST APIs</P>
                <Circle className="circle"></Circle>
                <Date className="date">Apr 2022 - Jul 2022</Date>
                </span>
              </li>
              <li>
              <span data-aos="zoom-out">
                <Title>EcoCar Team Member</Title>
                <P>
                    A member in the development of the HMI subteam. EcoCar is a competition sponsored by the U.S. Department of Energy, General Motors and MathWorks.
                </P>
                <P style={{color: `rgb(197,141,229)`}}> Adobe XD | Technical Writing | Prototyping  | UX/UI</P>
                <Circle className="circle"></Circle>
                <Date>Jan 2021 - Dec 2021</Date>
                </span>
              </li>
              <li>
              <span data-aos="zoom-out">
                <Title>Electrical Engineering Course Grader</Title>
                <P>
                  A part-time job to grade an average of 50 students' homework remotely.
                </P>
                <P style={{color: `rgb(197,141,229)`}}>  Calculation | Precision | Time Management | Grading Rules  </P>
                <Circle className="circle"></Circle>
                <Date className="date">Jan 2021 - May 2021</Date>
                </span>
              </li>
              <li>
              <span data-aos="zoom-out">
                <Title>Adobe Photoshop Teacher</Title>
                <P>
                An introductory summer course to learn the basics of designing using Photoshop for young aged learners.
                </P>
                <P style={{color: `rgb(197,141,229)`}}>  Designing | Concepts Simplifying | Patience | Mentoring  </P>
                <Circle className="circle"></Circle>
                <Date> Jun 2014 – Jul 2014</Date>
                </span>
              </li>
            </ul>
          </Container>
          </Main>
        </ExperianceWrapper>
    </MainContainer>
  );
};

export default ExperianceSection;
