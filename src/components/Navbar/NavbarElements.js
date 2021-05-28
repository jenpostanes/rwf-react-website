import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { Color } from "../Variables"

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
  background-color: #fff;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavLogo = styled(LinkRouter)`
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
  color: #000;
  text-decoration: none;
`;

export const Highlight = styled.span`
  color: ${Color.main};
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: #000;
    margin-top: 5px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  margin: 0 15px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #000;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid ${Color.main};
  }
`;

export const NavButton = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
