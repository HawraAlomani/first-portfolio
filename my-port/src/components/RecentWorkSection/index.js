import React, { useEffect } from "react";
import {
  ProjectsContainer,
  ProjectsWrapper,
  RecentProjectHeadline,
  TextAnimation,
  TextWrapper,
  CardContainer,
  Div1,
  Div2,
  GridContainer,
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6
} from "./RecentWorkElements";
import Aos from "aos";
import "aos/dist/aos.css";
import Exchange from "../images/CardExchange.png";
import ViewMore from '../images/View More.png';

const RecentWork = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
      <ProjectsContainer id={"work"}>
        <ProjectsWrapper>
          <RecentProjectHeadline data-aos="fade-up">
            Explore Recent Projects
          </RecentProjectHeadline>
          {/* <TextWrapper data-aos="zoom-in">
          <TextAnimation>
            <span>Now</span>
            <span>you</span>
            <span>can</span>
            <span>visit</span>
            <span>and</span>
            <span>see</span>
            <span>any</span>
            <span>of</span>
            <span>my </span>
            <span>projects</span>
            <span>by </span>
            <span>clicking</span>
            <span>on</span>
            <span>it</span>
          </TextAnimation>
          </TextWrapper> */}
          <CardContainer>
          <GridContainer>
            <Card1 data-aos="fade-up"> <img src={Exchange}/> </Card1>
            <Card2 data-aos="fade-up"> <img src={Exchange}/> </Card2>
            <Card3 data-aos="fade-up"> <img src={Exchange}/></Card3>
            <Card4 data-aos="fade-up"> <img src={Exchange}/></Card4>
            <Card5 data-aos="fade-up"> <img src={Exchange}/></Card5>
            <Card6 data-aos="fade-up"> <img src={ViewMore}/></Card6>
          </GridContainer>
          <Div1 className='box1' data-aos="fade-left"></Div1>
          <Div2 className='box1' data-aos="fade-right"></Div2>
          </CardContainer>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default RecentWork;
