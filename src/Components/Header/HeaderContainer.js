import React from "react";
import { Container, LogoContainer } from "./styled";
import Images from "../../config/images";
import Img from "../common/Images";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

const HeaderContainer = (props) => {
  const {
    searchResults,
    debouncedResults,
    setShowSearchListing,
    showSearchListing,
    showSearchHandle,
    searchBar,
  } = props;

  let navigate = useNavigate();
  return (
    <Container searchBar={searchBar}>
      <LogoContainer
        onClick={() => {
          navigate(`/`);
        }}
      >
        <Img source={Images.LOGO.default} height="40px" />
      </LogoContainer>
      {searchBar && (
        <Search
          searchResults={searchResults}
          debouncedResults={debouncedResults}
          setShowSearchListing={setShowSearchListing}
          showSearchListing={showSearchListing}
          showSearchHandle={showSearchHandle}
        />
      )}
    </Container>
  );
};

export default HeaderContainer;
