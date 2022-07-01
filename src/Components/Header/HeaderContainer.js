import React, { useRef } from "react";
import {
  Container,
  LogoContainer,
  SearchContainer,
  Input,
  Button,
} from "./styled";
import Images from "../../config/images";
import Img from "../common/Images";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import { useOnClickOutside } from "../customHooks/useOnClickOutside";

const HeaderContainer = (props) => {
  const {
    searchResults,
    debouncedResults,
    setShowSearch,
    showSearch,
    showSearchHandle,
  } = props;
  const ref = useRef();
  useOnClickOutside(ref, () => setShowSearch(false));
  let navigate = useNavigate();
  return (
    <Container>
      <LogoContainer
        onClick={() => {
          navigate(`/page/1`);
        }}
      >
        <Img source={Images.LOGO.default} height="40px" />
      </LogoContainer>
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
        {showSearch && <Search searchResults={searchResults} />}
      </SearchContainer>
    </Container>
  );
};

export default HeaderContainer;
