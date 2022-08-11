import React, { useEffect } from "react";
// import { Button } from "../ButtonElements";
import img2 from '../images/AboutColored.png';
import Aos from "aos";
import "aos/dist/aos.css";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./AboutElements";
const AboutSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
}) => {
  useEffect(()=>{
    Aos.init({duration: 3000});

  },[])
  return (
    <>
      <AboutContainer lightBg={lightBg} id={id}>
        <AboutWrapper>
          <AboutRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine  data-aos='fade-down' >{topLine}</TopLine>
                <Heading lightText={lightText}  data-aos='fade-left'> {headline} </Heading>
                <Subtitle darkText={darkText}  data-aos='fade-right'> {description} </Subtitle>
                <BtnWrap>
                  {/* <Button to="home">{buttonLabel}</Button> */}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap data-aos='zoom-in'>
                <Img src={img} alt={alt}/>
                <Img src={img2} alt={alt}/>
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
