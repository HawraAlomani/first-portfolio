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
import Exchange from "../images/exchange-window.png";
import WordEcho from "../images/theword-echo-window.png";
import MoodChanger from "../images/Mood-window.png";
import PastRhythm from "../images/past-rhythm-window.png";
import ToDoList from "../images/todo-list-window.png";
import ViewMore from '../images/View More.png';
// import ExchangeLink from "https://meek-sunflower-a336ad.netlify.app/";

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
            <Card1 data-aos="fade-up"> <a href="https://toys-exchange.netlify.app/" target="_blank"> <img src={Exchange}/> </a></Card1>
            <Card2 data-aos="fade-up"> <a href="https://62e7bab3051ac7362bee1ca1--willowy-rabanadas-074edd.netlify.app/" target="_blank"> <img src={MoodChanger}/> </a></Card2>
            <Card3 data-aos="fade-up"> <a href="https://the-word-echo.netlify.app/" target="_blank"> <img src={WordEcho}/> </a></Card3>
            <Card4 data-aos="fade-up"> <a href="https://past-rhythm.netlify.app/" target="_blank"> <img src={PastRhythm}/> </a></Card4>
            <Card5 data-aos="fade-up"> <a href="https://todo-list-hw.netlify.app/" target="_blank"> <img src={ToDoList}/> </a></Card5>
            <Card6 data-aos="fade-up"> <a href="https://github.com/HawraAlomani?tab=repositories" target="_blank"> <img src={ViewMore}/> </a></Card6>
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
