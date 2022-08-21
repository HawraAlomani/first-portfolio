import styled from "styled-components";

export const ProjectsContainer = styled.div`
  color: white;
  background: ${({ lightBg }) => (lightBg ? "#F5F5F5" : "#232029")};
  height: 850px;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ProjectsWrapper = styled.div`
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
  text-align: center;
`

export  const RecentProjectHeadline = styled.div`
/* color:#232029; */
color: white;
font-size: 50px;
@media screen and (max-width: 600px){
  font-size: 40px;
}
padding-top: 100px;
-webkit-text-stroke: 1px white;
`

export const TextWrapper = styled.p`
  height: 100vh;
  justify-content: center;
  text-align: center;
`
export const TextAnimation = styled.div`
 font-family: "Encode Sans Expanded", sans-serif;
 font-size: 21px;
 padding-bottom: 600px;
justify-content: center;
  text-align: center;
transform: scale(0.94);
    animation: scale 5s forwards cubic-bezier(0.5, 1, 0.89, 1);
  @keyframes scale {
  100% {
    transform: scale(1);
  }
  
}

span {
  display: inline-block;
  justify-content: center;
  text-align: center;
  opacity: 0;
  filter: blur(4px);
  padding-left:10px;
  padding-right: 10px;
  padding-top: 3px;
}

span:nth-child(1) {
  animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(2) {
  animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(3) {
  animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(4) {
  animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(5) {
  animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(6) {
  animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(7) {
  animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(8) {
  animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(9) {
  animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(10) {
  animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
`
export const CardContainer = styled.div`
position: relative;
display: block;
border: 15px solid white;
background-color: white;
box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset, black 0px 7px 29px 0px;
border-radius: 50px;
width: 1000px;
height: 550px;
@media screen and (max-width: 1020px) {
  width: 100%;
  height: 450px;
}
@media screen and (max-width: 600px) {
  width: 100%;
  height: 350px;
}

`
export const Div1 = styled.div`
z-index: 1;
position: absolute;
        top: 0;
        left: 0;
.box1{
  position: absolute;
	top: 50%;
	left: 50%;
	height: 30px;
	width: 30px;
	background: transparent;
	//border: solid black;
}
  width:300px;
	height:300px;
	//border-style: outset;
	//border-radius: 50% 50% 0 0;
	border-radius:50%;
	background-color:blue;
	/* position: relative; */
	animation-name: circle1;
	animation-duration: 20s;
	animation-iteration-count: infinite;
	//animation-play-state:paused;
  @keyframes circle1 {
	0%{background-color:#a163f5; left:2%; top:5%;}
	25%{background-color:#eab5d5; left:95%; top:5%;}
	50%{background-color:#a163f5;left:95%; top:90%;}
	75%{background-color:rgba(0, 0, 0, 0);left:2%; top:90%;} 
	100%{background-color:#a163f5; left:2%; top:5%;}
}

`
export const Div2 = styled.div`
position: absolute;
z-index: 1;
.box1{
  position: absolute;
	top: 50%;
	left: 50%;
	height: 30px;
	width: 30px;
	background: transparent;
	border: solid black;
}
  width:50px;
	height:50px;
	//border-style: outset;
	border-radius: 50%;
	background-color:yellow;
	/* position: relative; */
	animation-name: circle2;
	animation-duration: 20s;
	animation-iteration-count: infinite;
	//animation-play-state:paused;
  @keyframes circle2 {
	0%{background-color:#a163f5; left:95%; top:90%;}
	25%{background-color:#eab5d5; left:2%; top:90%;}
	50%{background-color:#a163f5;left:2%; top:5%;}
	75%{background-color:rgba(0, 0, 0, 0);left:95%; top:5%;} 
	100%{background-color:#a163f5; left:95%; top:90%;}
}

`
export const GridContainer = styled.div`
 display: grid; 
 position: relative;
 z-index: 2;
 margin-top:-160px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
  grid-template-rows: 0.7fr 0.8fr 0.8fr 1.7fr; 
  gap: 10px 10px; 
  grid-template-areas: 
    ". . . . ."
    ". card1 card2 card3 ."
    ". card4 card5 card6 ."
    ". . . . ."; 
    @media screen and (max-width: 1020px){
      margin-top:-130px;
}
@media screen and (max-width: 600px){
      margin-top:-50px;
}
`
export const Card1 = styled.div`
grid-area: card1;
transition: transform 0.3s;
img:hover {
  transform: scale(1.1);
}
img{
  width: 250px;
  @media screen and (max-width: 1020px){
  width: 200px;
}
@media screen and (max-width: 600px){
  width: 120px;
}

}

`
export const Card2 = styled.div`
grid-area: card2;
transition: transform 0.3s;
img:hover {
  transform: scale(1.1);
}
img{
  width: 250px;
  @media screen and (max-width: 1020px){
  width: 200px;
}
@media screen and (max-width: 600px){
  width: 120px;
}
}
`
export const Card3 = styled.div`
grid-area: card3;
transition: transform 0.3s;
img:hover {
  transform: scale(1.1);
}
img{
  width: 250px;
  @media screen and (max-width: 1020px){
  width: 200px;
}
@media screen and (max-width: 600px){
  width: 120px;
}
}
`
export const Card4 = styled.div`
grid-area: card4;
transition: transform 0.3s;
img:hover {
  transform: scale(1.1);
}
img{
  width: 250px;
  @media screen and (max-width: 1020px){
  width: 200px;
}
@media screen and (max-width: 600px){
  width: 120px;
}
}
`
export const Card5 = styled.div`
grid-area: card5;
transition: transform 0.3s;
img:hover {
  transform: scale(1.1);
}
img{
  width: 250px;
  @media screen and (max-width: 1020px){
  width: 200px;
}
@media screen and (max-width: 600px){
  width: 120px;
}
}
`
export const Card6 = styled.div`
grid-area: card6;
transition: transform 0.3s;
img:hover {
  transform: scale(1.1);
}
img{
  width: 250px;
  @media screen and (max-width: 1020px){
  width: 200px;
}
@media screen and (max-width: 600px){
  width: 120px;
}
}
`
