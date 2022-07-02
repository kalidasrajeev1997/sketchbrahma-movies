import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  @media (max-width: 1170px) {
    gap: 10px;
  }
`;

export const MovieCard = styled.div`
  width: 24%;
  cursor: pointer;
  @media (max-width: 991px) {
    width: 49%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const MoveDetails = styled.div`
  background: linear-gradient(0deg, #1a2b4a 0%, #2b507c 105.38%);
  position: relative;
  top: -7px;
  height: 65px;
  padding: 2px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Rating = styled.div`
  color: #b3b3b3;
  font-size: 14px;
  margin-left: 4px;
  margin-top: 4px;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;
