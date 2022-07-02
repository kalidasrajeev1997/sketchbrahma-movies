import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 90vh;
  @media (max-width: 991px) {
    flex-direction: column-reverse;
    height: auto;
    position: relative;
  }
`;

export const Details = styled.div`
  width: 40%;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
    width: 100%;
    background: #0c111b;
  }
`;

export const DetailsContainer = styled.div`
  padding: 40px;
`;

export const Background = styled.div`
  width: 60%;
  background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%),
    url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  @media (max-width: 991px) {
    width: 100%;
    height: 260px;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0) 100%
      ),
      url(${(props) => props.image});
    background-size: cover;
    background-position: center;
  }
`;

export const H = styled.div`
  font-size: 42px;
  margin-bottom: 30px;
  font-weight: 500;
  @media (max-width: 991px) {
    font-size: 24px;
  }
`;

export const Overview = styled.div`
  color: #b3b3b3;
  margin-top: 10px;
`;

export const DateDiv = styled.div`
  margin: 20px 0px;
`;

export const BackButton = styled.div`
  @media (max-width: 991px) {
    position: absolute;
    top: 20px;
    left: 20px;
  }
`;
