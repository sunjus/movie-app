import React from "react";
import styled from "styled-components";

const NavMain = () => {
  return (
    <Main>
      🎥<button>DBMovie</button>
    </Main>
  );
};

const Main = styled.button`
  font-size: 32px;
  font-weight: 900;
  border: none;
  outline: none;
  background: transparent;

  > button {
    border: none;
    outline: none;
    background: transparent;
    font-size: 32px;
    font-weight: 900;
    cursor: pointer;
    user-select: none;
    color: #f9a5ff;
  }
`;

export default NavMain;
