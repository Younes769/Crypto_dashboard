import { useState } from "react";
import styled from "styled-components";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <SearchContainer>
      <SearchWrapper isFocused={isFocused}>
        <SearchIcon>🔍</SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search cryptocurrencies..."
          value={searchTerm}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {searchTerm && (
          <ClearButton
            onClick={() => {
              setSearchTerm("");
              onSearch("");
            }}
          >
            ✕
          </ClearButton>
        )}
      </SearchWrapper>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0 auto 2.5rem;
  padding: 0 1rem;
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 12px;
  border: 2px solid
    ${(props) => (props.isFocused ? "var(--primary-color)" : "#e9ecef")};
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.isFocused ? "var(--card-hover-shadow)" : "var(--card-shadow)"};

  @media (prefers-color-scheme: dark) {
    background: #2a2f35;
    border-color: ${(props) =>
      props.isFocused ? "var(--primary-color)" : "#454d55"};
  }
`;

const SearchIcon = styled.span`
  padding: 0 0.5rem 0 1rem;
  color: var(--secondary-color);
  font-size: 1.2rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 0.5rem;
  border: none;
  background: none;
  font-size: 1rem;
  color: var(--dark-color);
  outline: none;

  &::placeholder {
    color: var(--secondary-color);
  }

  @media (prefers-color-scheme: dark) {
    color: var(--light-color);
  }
`;

const ClearButton = styled.button`
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  color: var(--secondary-color);
  cursor: pointer;
  font-size: 1rem;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export default SearchBar;
