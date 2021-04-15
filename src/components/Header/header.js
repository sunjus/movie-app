import { useState } from "react";
import styled, { css } from "styled-components";

const MainHeaderContainer = styled.div`
  height: 100px;
  min-height: calc(8vh - 8px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainHeaderInnerContainer = styled.div`
  display: flex;
  max-width: 1280px;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  text-transform: uppercase;
  font-size: 23px;
  vertical-align: middle;

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    height: 130px;
    margin: auto;
    padding: 10px;
  }
`;

const Logo = styled.h2`
  color: pink;
  font-weight: 900;
  margin-right: 8px;

  @media (max-width: 1024px) {
    font-size: 22px;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    margin: 0 0 0 10px;
  }
  @media (max-width: 540px) {
    font-size: 18px;
  }
`;

const Link = styled.a`
  font-size: 22px;
  padding: 11px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  background-color: ${(props) => (props.dark ? "grey" : "white")};
  color: ${(props) => (props.dark ? "white" : "black")};
  :after {
    font-size: 23px;
  }
  :hover {
    ${(props) =>
      props.dark
        ? css`
            background-color: white;
            color: grey;
          `
        : css`
            background-color: grey;
          `}
  }
  cursor: pointer;

  @media (max-width: 1024px) {
    font-size: 18px;
    padding: 9px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px;
  }
  @media (max-width: 540px) {
    font-size: 14px;
    padding: 6px;
  }
`;

const HeaderRight = styled.div`
  height: 45px;
  width: 600px;
  text-decoration: none;
  margin: 0;
  padding: 0;
  display: block;

    @media (max-width: 540px) {
      height: 30px;
      font-size: 16px;
    }
  }

  @media (max-width: 1024px) {
    width: 500px;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    width: 300px;
    font-size: 15px;
  }

  @media (max-width: 540px) {
    width: 150px;
    font-size: 12px;
    height: 30px;
    margin-right: 10px;
  }
`;

const NavMenu = () => {
  return (
    <MainHeaderContainer>
      <MainHeaderInnerContainer>
        <Logo>BDMovie</Logo>
        <Link>latest</Link>
        <Link dark>popular</Link>
        <Link href="https://github.com/sunjus/movie_list_app/" target="_blank">
          github
        </Link>
      </MainHeaderInnerContainer>
    </MainHeaderContainer>
  );
};

export default NavMenu;
