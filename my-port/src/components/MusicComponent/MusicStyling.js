import styled from "styled-components";

export const Circle = styled.div`
  background: rgba(255, 255, 255, 0.33);
  backdrop-filter: blur(5.7px);
  -webkit-backdrop-filter: blur(5.7px);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  img {
    width: 50px;
    transform: translate(4px, 5px);
    cursor: pointer;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.5);
    //animate this later when play the music
    animation: playing 3s infinite;
@keyframes playing {
  50% {box-shadow: rgb(220, 0, 240, 0.2) 0px 0px 0px 5px, rgb(220, 0, 240, 0.1) 0px 0px 0px 10px, rgb(220, 0, 240, 0.1) 0px 0px 0px 15px;
  }}
}
`;

export const ComponentContainer = styled.div`
  right: 0;
  bottom: 0;
  margin-bottom: 25px;
  margin-right: 25px;
  position: fixed;
  z-index: 999;
`;
