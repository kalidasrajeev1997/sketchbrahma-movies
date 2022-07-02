import React from "react";
import styled from "styled-components";

const Img = styled.img`
  height: ${(props) => (props.height ? props.height : "100%")};
  width: ${(props) => (props.width ? props.width : "initial")};
  object-fit: ${(props) => (props.fit ? props.fit : "inherit")};
  @media (max-width: 991px) {
    height: ${(props) =>
      props.mobileHeight ? props.mobileHeight : props.height};
  }
`;

const Images = (props) => {
  const { source, height, width, fit, mobileHeight } = props;
  return (
    <Img
      src={source}
      height={height}
      width={width}
      fit={fit}
      mobileHeight={mobileHeight}
    />
  );
};

export default Images;
