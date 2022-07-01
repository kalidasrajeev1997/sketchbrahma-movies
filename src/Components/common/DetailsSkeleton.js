import React from "react";
import styled from "styled-components";

const Details = styled.div`
  width: 40%;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailsContainer = styled.div`
  padding: 40px;
`;

const H = styled.div`
  font-size: 42px;
  margin-bottom: 30px;
  font-weight: 500;
`;

const DetailsSkeleton = () => {
  return (
    <Details>
      <DetailsContainer>
        <H>...</H>
      </DetailsContainer>
    </Details>
  );
};

export default DetailsSkeleton;
