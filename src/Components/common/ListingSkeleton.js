import React from "react";
import styled from "styled-components";

const Skeleton = styled.div`
  height: 200px;
  width: 24%;
  background: #161b25;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const ListingSkeleton = () => {
  return <Skeleton />;
};

export default ListingSkeleton;
