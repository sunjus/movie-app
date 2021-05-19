import React, { useContext } from "react";
import NavMain from "./NavMain";
import NavMenu from "./NavMenu";
import NavSearch from "./NavSearch";
import styled from "styled-components";
import { MovieContext } from "../../../context/MovieContext";

const Nav = () => {
  const { hiddenMenu, setHiddenMenu } = useContext(MovieContext);
  return (
    <NavBar>
      <div className="container">
        <div className="wrapper">
          <NavMain />
          <NavMenu />
        </div>
        <NavSearch />
        <i
          id="burgerMenu"
          className={hiddenMenu ? "fas fa-bars" : "fas fa-times"}
          onClick={() => setHiddenMenu(!hiddenMenu)}
        ></i>
      </div>
    </NavBar>
  );
};

const NavBar = styled.div`
  width: 100%;
  min-height: 80px;
  padding: 20px 0;
  background: transparent;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .wrapper {
      display: flex;
      align-items: center;
    }
    #burgerMenu {
      color: #f9a5ff;
      cursor: pointer;
    }
  }
  @media (max-width: 860px) {
    .container {
      #burgerMenu {
        display: block;
      }
    }
  }
  @media (max-width: 1365px) {
    .container {
      max-width: 90%;
    }
  }
`;

export default Nav;
