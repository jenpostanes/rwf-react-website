import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { Button } from "../ButtonElements";
import {
  Nav,
  NavLogo,
  Highlight,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavButton,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavLogo to="/" onClick={toggleHome}>
          Read Well <Highlight>Foundation</Highlight>
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>

        <NavMenu>
          <NavItem>
            <NavLinks
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-100}
            >
              Home
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-100}
            >
              About
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="events"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-100}
            >
              Events
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="gallery"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-100}
            >
              Gallery
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks
              to="donate"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-100}
            >
              Donate
            </NavLinks>
          </NavItem>
        </NavMenu>

        <NavButton>
          <Button border="false" bgPrimary="false" txtPrimary="false">
            Sign Up
          </Button>
        </NavButton>
      </Nav>
    </>
  );
};

export default Navbar;
