import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideButtonWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Home</SidebarLink>
        <SidebarLink to="/">About</SidebarLink>
        <SidebarLink to="/">Events</SidebarLink>
        <SidebarLink to="/">Gallery</SidebarLink>
        <SidebarLink to="/">Contact</SidebarLink>
      </SidebarMenu>
      <SideButtonWrap>
        <SidebarRoute to="/">Donate Now</SidebarRoute>
      </SideButtonWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
