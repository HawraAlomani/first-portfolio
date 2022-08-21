import React from 'react';
import {MainContainer, MainBg,UpperContainer, Container, DownloadBtn } from './ResumeElements';
import Spline from '@splinetool/react-spline';
import Pdf from '../pdf/HawraAlomani-resume-new.pdf';


const ResumeSection = () => {
   // Function will execute on click of button
   const saveFile = () => {
    // using Java Script method to get PDF file
    fetch(Pdf).then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'HawraAlomani_Resume.pdf';
            alink.click();
        })
    })
}
  return (
    <MainContainer id={'resume'}>
        <MainBg>
          <UpperContainer>
          <Container>
        <Spline  className='spline'scene="https://prod.spline.design/hMIvjzMDkcL5kGYT/scene.splinecode" />
        <DownloadBtn onClick={saveFile}>
           My Resume
           </DownloadBtn>
        </Container>
        </UpperContainer>
        </MainBg>
        </MainContainer>
  );
};

export default ResumeSection;