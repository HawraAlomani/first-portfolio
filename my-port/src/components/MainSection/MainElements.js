import styled from 'styled-components';


export const MainContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 950px;
position: relative;
z-index: 2;

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

export const ImgBg = styled.img`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`
export const ImgMain = styled.img`
width: 35%;
float: left;
margin-left: 8rem;

@media screen and (max-width: 600px){
    width: 45%;
    margin-left: 2rem;
}
`
export const MainContent = styled.div`
font-weight:bold;
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
padding-bottom: 180px;
`
export const TypeContent =styled.div`
font-family: 'Cutive Mono', monospace;
padding-top: 70px;
font-size: 21px;
@media screen and (max-width: 1250px){
    font-size: 16px;
}
@media screen and (max-width: 780px){
padding-top: 50px;
font-size: 16px;
}
`