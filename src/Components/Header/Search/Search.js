import React, { useRef } from "react";
import styled from "styled-components";
import Images from "../../../config/images";
import Img from "../../common/Images";
import { useOnClickOutside } from "../../customHooks/useOnClickOutside";
import SearchListing from "./SearchListing";

const SearchContainer = styled.div`
  display: flex;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Input = styled.input`
  height: 32px;
  background: #334a6a;
  border: 1px solid #7a7a7a;
  border-radius: 4px 0px 0px 4px;
  width: 300px;
  font-family: poppins;
  text-indent: 10px;
  color: white;
  outline: none;
  ::placeholder {
    color: #ddd;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background: #f46b45;
  background: -webkit-linear-gradient(to bottom, #eea849, #f46b45);
  background: linear-gradient(to bottom, #eea849, #f46b45);
  height: 36px;
  border: none;
  border-radius: 0px 4px 4px 0px;
  width: 40px;
`;

const Search = (props) => {
  const {
    debouncedResults,
    showSearchHandle,
    showSearchListing,
    searchResults,
    setShowSearchListing,
  } = props;
  const ref = useRef();
  useOnClickOutside(ref, () => setShowSearchListing(false));
  return (
    <SearchContainer ref={ref}>
      <Input
        type="text"
        placeholder="Search movies"
        onChange={debouncedResults}
        onFocus={(e) => {
          debouncedResults(e);
          showSearchHandle();
        }}
      />
      <Button>
        <Img source={Images.SEARCH.default} height="20px" />
      </Button>
      {showSearchListing && <SearchListing searchResults={searchResults} />}
    </SearchContainer>
  );
};

export default Search;
