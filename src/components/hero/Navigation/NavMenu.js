import React from "react";
import NavLink from "./NavLink";
import styled from "styled-components";

const NavMenu = () => {
  return (
    <Menu>
      <NavLink link="LATEST" />
      <NavLink link="POPULAR" />
      <NavLink link="GITHUB" />
    </Menu>
  );
};

const Menu = styled.div`
  padding-left: 80px;
  @media (max-width: 860px) {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    background: rgba(0, 0, 0, 0.8);
    min-height: 100vh;
    padding-left: 0;
    padding: 20px 50px;
    width: 100%;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: all 800ms ease-in-out;
    &.hidden {
      left: -600px;
      opacity: 0;
    }
  }
`;

export default NavMenu;
