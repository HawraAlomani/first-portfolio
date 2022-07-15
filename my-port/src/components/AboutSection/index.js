import React from "react";
import {Button} from 'react-scroll';
import {AboutContainer, AboutWrapper, AboutRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap} from './AboutElements';
const AboutSection = () => {
  return (
    <>
      <AboutContainer>
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <TextWrapper>
                <TopLine>Top Line</TopLine>
                <Heading> Heading </Heading>
                <Subtitle> Subtitle </Subtitle>
                <BtnWrap>
                    <Button to='home'/>
                </BtnWrap>
              </TextWrapper>
            </Column1>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
