import React, { useContext } from "react";
import styled from "styled-components";
import { MovieContext } from "../../../context/MovieContext";

const NavLink = ({ link }) => {
  const { setActiveLink, setHiddenMenu } = useContext(MovieContext);
  return (
    <Link>
      <button
        onClick={() => {
          setActiveLink(Link);
          setHiddenMenu(true);
        }}
      >
        {link}
      </button>
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
