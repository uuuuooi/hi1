/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/5/2022
  ==============================================================================
*/
import styled from "@emotion/styled";

const Header = styled.header<{ testProps: boolean; show: boolean }>`
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 9;
  padding: 12px 120px 0px 0px;

  background: ${(props) => (props.show ? "white" : "")};
`;

const Logo = styled.h1`
  padding: 0px 55px;
  &.active {
    background-image: url("./images/ico_hover_logo.webp");
    background-repeat: no-repeat;
  }
`;

const Nav = styled.nav`
  padding: 0 150px;
`;

const NavUl = styled.ul`
  display: flex;
  list-style: none;
`;

const NavLi = styled.li`
  padding: 11px 16px;
  width: 190px;
  font-size: 18px;
  font-weight: 700;
  color: white;

  &.active {
    color: #131b39;
  }
`;

const Translation = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  all: unset;
  color: white;
  font-size: 14px;
  &.active {
    color: #131b39;
  }
`;
const Icon = styled.div`
  color: white;
  font-size: 30px;
  margin: 0px 0px 0px 60px;
  &.active {
    color: #131b39;
  }
`;

export { Header, Logo, Nav, NavUl, NavLi, Translation, Button, Icon };
