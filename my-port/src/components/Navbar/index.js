import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';
import LogoImg from '../images/mouse-cursor-logo.png';
const Navbar = ({toggle}) => {
  return (
   <>
   <Nav>
       <NavbarContainer>
           <NavLogo to='main'>
               <img src={LogoImg} style={{ width: 190, padding: 10, marginTop:20, marginBottom: 10}}/> 
               {/* Change styling later */}
           </NavLogo>
           <MobileIcon onClick={toggle}>
               <FaBars/>
           </MobileIcon>
           <NavMenu>
               <NavItem>
                   <NavLinks to="about">
                       About
                   </NavLinks>
               </NavItem>
               <NavItem>
                   <NavLinks to="work">
                       Recent Work
                   </NavLinks>
               </NavItem>
               <NavItem>
                   <NavLinks to="experiance">
                       Experiance
                   </NavLinks>
               </NavItem>
               <NavItem>
                   <NavLinks to="resume">
                       Resume
                   </NavLinks>
               </NavItem>
           </NavMenu>
           <NavBtn>
               <NavBtnLink to="/contact"> Contact </NavBtnLink>
           </NavBtn>
       </NavbarContainer>
   </Nav>
   </>
  );
};

export default Navbar;