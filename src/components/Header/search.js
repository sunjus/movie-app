import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Search = ({ getQuery }) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}`
      );

      console.log(result.data.results);
      setItems(result.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  const onChange = (q) => {
    console.log(q);
    setText(q);
    getQuery(q);
  };

  return (
    <SearchBar>
      <form>
        <input
          value={text}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search for a movie..."
          type="text"
          autoFocus
        />
      </form>
    </SearchBar>
  );
};

const SearchBar = styled.div`
    height: 45px;
    width: 600px;
    text-decoration: none;
    margin: auto;
    padding: 0;
    
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

export default Search;
