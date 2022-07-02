import styled from "styled-components";

export const Container = styled.div`
  height: 10vh;
  background: #263f61;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    padding: ${(props) => (props.searchBar ? "0px 30px 20px" : "0xp 30px")};
  }
`;

export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 100%;
    margin: 20px 0px;
  }
`;
