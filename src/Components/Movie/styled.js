import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 90vh;
`;

export const Details = styled.div`
  width: 40%;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailsContainer = styled.div`
  padding: 40px;
`;

export const Background = styled.div`
  width: 60%;
  background: linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 100%),
    url(${(props) => props.image});
  background-size: cover;
`;

export const H = styled.div`
  font-size: 42px;
  margin-bottom: 30px;
  font-weight: 500;
`;

export const Overview = styled.div`
  color: #b3b3b3;
  margin-top: 10px;
`;

export const DateDiv = styled.div`
  margin: 20px 0px;
`;
