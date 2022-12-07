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
`;

const Nav = styled.nav`
  padding: 0 30px;
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

export { Header, Nav, NavUl, NavLi, Translation };
