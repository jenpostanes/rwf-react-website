import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { Color } from "../../components/Variables";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};
  z-index: 999;
  width: 350px;
  height: 100%;
  display: grid;
  align-items: center;
  background: ${Color.main};
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 414px) {
    width: 100%;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 2.0rem;
  right: 3.0rem;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
  color: ${Color.white};
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 60px);
  text-align: center;
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: 0.2s ease-in-out;
  color: ${Color.white};
  cursor: pointer;
`;

export const SideButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SidebarRoute = styled(LinkRouter)`
  padding: .9rem 0;
  width: 150px;
  font-weight: bold;
  text-transform: capitalize;
  background: ${Color.white};
  border: none;
  border-radius: 45px;
  color: ${Color.main};
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  outline: none;

  &:hover {
    transform: translateY(-7px);
  }
`;
