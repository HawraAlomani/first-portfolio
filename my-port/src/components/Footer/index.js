import React from 'react';
import{P, FooterContainer} from './FooterElements';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';



const Footer = () => {
    const style = { color: "#454047", fontSize: "2em"}
  return (
    <div>
        <span class="changeColor">
        <FooterContainer>
        <P>&copy;2022 Hawra Alomani</P>
        <P> 
        <a href="https://www.linkedin.com/in/hawra-a-11a208153" target="_blank"><AiFillLinkedin style={style} onMouseOver={({target})=>target.style.color="white"}
    onMouseOut={({target})=>target.style.color="#454047"}/></a>
        <a href="https://github.com/HawraAlomani" target="_blank"><AiOutlineGithub style={style} onMouseOver={({target})=>target.style.color="white"}
    onMouseOut={({target})=>target.style.color="#454047"}/></a>
        <a href="mailto: ha0073@mix.wvu.edu" target="_blank"><MdEmail style={style} onMouseOver={({target})=>target.style.color="white"}
    onMouseOut={({target})=>target.style.color="#454047"}/></a>
         </P>
         </FooterContainer>
         </span>
    </div>
  )
}

export default Footer;