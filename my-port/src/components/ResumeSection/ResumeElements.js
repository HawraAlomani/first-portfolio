import styled from 'styled-components';


export const MainContainer = styled.div`
background: #232029;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 950px;
position: relative;
z-index: 0;

`

export const MainBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`
export const UpperContainer = styled.div`
position: relative;
`
export const Container = styled.div`
margin-top: 100px;
  max-width:100%;
   max-height:100%;
   position: absolute;
  top: 50%;
  left: 50%; 
  transform: translate(-50%, -50%);
  @media screen and (max-width: 730px) {
    
  }
`

export const DownloadBtn = styled.button`
a{
    text-decoration: none
}
font-family: 'Encode Sans Expanded', sans-serif;
margin-top: 470px;
  max-width:100%;
   position: absolute;
  top: 50%;
  left: 49%; 
  transform: translate(-50%, 50%);
border-radius: 50px;
background-image: linear-gradient(to right, #e8b3d6
,#c982dd
);
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
&:hover{
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`;