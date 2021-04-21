import { useContext } from "react";
import { MovieContext } from "../../../context/MovieContext";
import styled from "styled-components";

const NavSearch = () => {
  const { search, setSearch, handleSearch } = useContext(MovieContext);
  return (
    <SearchBar>
      <form onSubmit={handleSearch}>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a movie..."
          type="text"
        />
      </form>
    </SearchBar>
  );
};

const SearchBar = styled.div`
  height: 40px;
  min-height: 40px;
  input {
    border: none;
    outline: none;
    border-radius: 50px;
    border: 1px solid #2c2f39;
    background: transparent;
    padding: 10px 16px;
    width: 260px;
    color: #f9a5ff;
    &::placeholder {
      color: #f9a5ff;
      letter-spacing: 1px;
    }
  }
  @media (max-width: 860px) {
    input {
      width: 220px;
    }
  }
`;

export default NavSearch;
