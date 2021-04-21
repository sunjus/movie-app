import React from "react";
import styled from "styled-components";

const NavLink = ({ link }) => {
  return (
    <Link>
      <button>{link}</button>
    </Link>
  );
};

const Link = styled.button`
  border: none;
  outline: none;
  background: transparent;
  > button {
    border: none;
    outline: none;
    background: transparent;
    font-size: 22px;
    margin-right: 24px;
    font-weight: 700;
    cursor: pointer;
    user-select: none;
    color: whitesmoke;
  }
  @media (max-width: 860px) {
    font-size: 40px;
  }
`;
export default NavLink;
