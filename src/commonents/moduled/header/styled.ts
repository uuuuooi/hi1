/*
  ==============================================================================
    (c) 2022. quantum universe All rights reserved.
    author : EUNHYE KIM
    start date : 12/5/2022
  ==============================================================================
*/
import styled from "@emotion/styled";

const Header = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  top: 0;
  z-index: 9;
  padding: 8px 48px;
  transition-timing-function: ease-in;
  transition: all 1s;
`;

const Logo = styled.h1`
  padding: 0px 55px;
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
  color: white;
`;

const Translation = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  all: unset;
  color: white;
  font-size: 14px;
`;
const Icon = styled.div`
  color: white;
  font-size: 30px;
  margin: 0px 0px 0px 60px;
`;

export { Header, Logo, Nav, NavUl, NavLi, Translation, Button, Icon };
