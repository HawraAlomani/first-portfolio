import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about'  onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to='work'  onClick={toggle}>
                Recent Work
                </SidebarLink>
                <SidebarLink to='experiance'  onClick={toggle}>
                Experiance
                </SidebarLink>
                <SidebarLink to='resume'  onClick={toggle}>
                Resume
                </SidebarLink>

            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='contact'>
                    Contact
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar