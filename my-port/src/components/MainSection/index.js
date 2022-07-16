import React from "react";
import ImageBg from "../images/Main Background.png";
import ImageMain from "../images/logoPortfolio.png";
import "../../../src/App.css";
import {
  MainContainer,
  MainBg,
  ImgBg,
  MainContent,
  ImgMain,
  TypeContent,
} from "./MainElements";
import Typewriter from "typewriter-effect";

const MainSection = () => {
  return (
    <MainContainer id={'main'}>
      <MainBg>
        <ImgBg src={ImageBg} />
      </MainBg>
      <MainContent>
        <ImgMain src={ImageMain} />
        <TypeContent>
          <Typewriter
            options={{ loop: true, delay: 75, skipAddStyles: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("I'm a Computer Engineer")
                .pauseFor(200)
                .deleteChars(19)
                .typeString("<strong> Hawra Alomani </strong> <br>I admire . .")
                .pauseFor(500)
                .typeString("<br> <br> → Programming")
                .pauseFor(2000)
                .deleteChars(11)
                .typeString("Designing")
                .pauseFor(2000)
                .deleteChars(9)
                .typeString("Solving <br> mathmatical <br> problems")
                .pauseFor(2000)
                .deleteAll()
                .start();
            }}
          />
        </TypeContent>
      </MainContent>
    </MainContainer>
  );
};

export default MainSection;
