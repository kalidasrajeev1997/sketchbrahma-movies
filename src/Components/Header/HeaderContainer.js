import React from "react";
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

const HeaderContainer = () => {
  let navigate = useNavigate();
  return (
    <Container>
      <LogoContainer
        onClick={() => {
          navigate(`/`);
        }}
      >
        <Img source={Images.LOGO.default} height="40px" />
      </LogoContainer>
      <SearchContainer>
        <Input type="text" placeholder="Search movies" />
        <Button>
          <Img source={Images.SEARCH.default} height="20px" />
        </Button>
      </SearchContainer>
    </Container>
  );
};

export default HeaderContainer;
