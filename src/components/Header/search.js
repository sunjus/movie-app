import styled from "styled-components";
import React from "react";

const SearchBar = styled.div`
    height: 45px;
    width: 600px;
    text-decoration: none;
    margin: 0;
    padding: 0;
    display: block;

    > input {
        height: 43px;
        width: 100%;
        padding: 0 24px;
        border: none;
        border-radius: 20px;
        font-size: 21px;
        outline: none;
        color: black;
        &::placeholder {
          color: grey;
        }    
`;

const Search = () => {
  return (
    <SearchBar>
      <input placeholder="Search for a movie.." type="text" />
    </SearchBar>
  );
};

export default Search;
