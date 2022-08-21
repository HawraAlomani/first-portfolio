import styled from "styled-components";

export const MainContainer = styled.div`
  font-family: "Encode Sans Expanded", sans-serif;
  background: #232029;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100%;
  position: relative;
  z-index: 0;
`;


export const ExperianceWrapper = styled.div`
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  text-align: center;
`;

export const TextHeadline = styled.div`
  color: white;
  font-size: 50px;
  @media screen and (max-width: 600px){
  font-size: 40px;
}
  padding-top: 100px;
  -webkit-text-stroke: 1px white;
  margin-bottom: 100px;
  img {
    width: 200px;
    margin-bottom: -80px;
    @media screen and (max-width: 650px){
      width: 40%;
}
  }
`;
export const Main = styled.div`
width: 100%;
height: auto;
padding: 50px 0;
display: grid;
place-items: center;


`
export const Container = styled.div`
  /* width: 70%; */
  text-align: left;
  height: auto;
  position: relative;
  ::after {
    position: absolute;
    content: ' ';
    width: 2px;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      rgb(164,100,244),
      rgb(212,148,226)
    );
  }
  ul {
    list-style: none;
  }
  ul li {
    width: 50%;
    height: auto;
    padding: 15px 20px;
    background-color: #fff;
    box-shadow: 1px 1px 25px #000;
    border-radius: 10px;
    margin-bottom: 30px;
    z-index: 99;
    position: relative;
    :nth-child(odd) {
      text-align: right;
      float: left;
      clear: right;
      transform: translateX(-30px);
      .circle {
        right: -31px;
        transform: translate(50%, -50%);
      }
      .date{
      right: 20px;
  }
    }
    :nth-child(even) {
      float: right;
      clear: left;
      transform: translateX(30px);
      .circle {
        left: -29px;
        transform: translate(-50%, -50%);
      }
    }
    :nth-child(4){
        margin-bottom: 0;
    }
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: #6233dd;
`;
export const P = styled.p`
  font-size: 15px;
  color: #666;
  margin: 7px 0;
  line-height: 23px;
`;

export const Circle = styled.span`
  width: 30px;
  height: 30px;
  background-color: rgb(220, 0, 240, 0.222);
  border-radius: 50%;
  position: absolute;
  top: 0;
  ::after {
    content: ' ';
    height: 15px;
    width: 15px;
    background-color: #7f46f1;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Date = styled.span`
  position: absolute;
  top: -40px;
  /* left: 20px; */
  width: 150px;
  height: 35px;
  border-radius: 20px;
  color: #fff;
  background-image: linear-gradient(
    to right,
    rgb(220, 0, 240, 0.1),
    rgb(220, 0, 240, 0.3)
  );
  display: grid;
  place-items: center;
  font-size: 14px;
  
`;
