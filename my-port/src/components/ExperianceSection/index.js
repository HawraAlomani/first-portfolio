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
                <Title>FrontEnd Developer</Title>
                <P>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
                </P>
                <Circle className="circle"></Circle>
                <Date className="date"> January, 2022</Date>
              </li>
              <li>
                <Title>FrontEnd Developer</Title>
                <P>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
                </P>
                <Circle className="circle"></Circle>
                <Date> January, 2022</Date>
              </li>
              <li>
                <Title>FrontEnd Developer</Title>
                <P>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
                </P>
                <Circle className="circle"></Circle>
                <Date className="date"> January, 2022</Date>
              </li>
              <li>
                <Title>FrontEnd Developer</Title>
                <P>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
                </P>
                <Circle className="circle"></Circle>
                <Date> January, 2022</Date>
              </li>
            </ul>
          </Container>
          </Main>
        </ExperianceWrapper>
    </MainContainer>
  );
};

export default ExperianceSection;
