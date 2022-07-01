import React from "react";
import styled from "styled-components";

const Img = styled.img`
  height: ${(props) => (props.height ? props.height : "100%")};
  width: ${(props) => (props.width ? props.width : "initial")};
  object-fit: ${(props) => (props.fit ? props.fit : "inherit")};
`;

const Images = (props) => {
  const { source, height, width, fit } = props;
  return <Img src={source} height={height} width={width} fit={fit} />;
};

export default Images;
