import styled from "styled-components";

export const Container = styled.div`
  height: 10vh;
  background: #263f61;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
`;

export const LogoContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
`;

export const Input = styled.input`
  height: 32px;
  background: #334a6a;
  border: 1px solid #7a7a7a;
  border-radius: 4px 0px 0px 4px;
  width: 300px;
  font-family: poppins;
  text-indent: 10px;
  color: white;
  outline: none;
  ::placeholder {
    color: #ddd;
  }
`;

export const Button = styled.button`
  background: #f46b45;
  background: -webkit-linear-gradient(to bottom, #eea849, #f46b45);
  background: linear-gradient(to bottom, #eea849, #f46b45);
  height: 37px;
  border: none;
  border-radius: 0px 4px 4px 0px;
  width: 40px;
`;
