import styled from "styled-components";

export const AboutContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#F5F5F5" : "#232029")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AboutWrapper = styled.div`
  font-family: "Encode Sans Expanded", sans-serif;
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;
export const TopLine = styled.p`
  color: #000000;
  background-color: #f5f5f5;
  padding: 5px 10px;
  width: fit-content;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  transition: 0.3s;
  &:hover {
    color: #f5f5f5;
    background: none;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#232029" : "#232029")};
  -webkit-text-stroke: 0.1px white;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  border-left: 5px solid #c3c3c3;
  padding-left: 20px;
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#F5F5F5")};
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  img:last-child {
    display: none;
  }
  &:hover img:last-child {
    display: inline-block;
  }
  &:hover img:first-child {
    display: none;
  }
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
