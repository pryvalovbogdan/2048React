import styled, { createGlobalStyle } from 'styled-components';

const globalFontSize = 16;

export const GlobalStyles = createGlobalStyle`
  body {
  width: 100%;
  height: 100vh;
    margin: 0;
    font-family: Roboto, sans-serif; // FixMe if font-family will be changed
    font-size: ${globalFontSize}px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    user-select: none;
    direction: ${props => props.direction};
    overflow: hidden;
  }
  
  button {
    font-family: Roboto, sans-serif;
    font-size: ${globalFontSize}px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    border: none;
    outline: none;
    margin-top: 5px;
  }
  input {
    border: none;
    outline: none;
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  background: #faf8ef;
  text-align: center;
  font-size: 25px;
`;

export const Title = styled.h1`
  color: navy;
  text-align: center;
  font-size: 25px;
`;

Wrapper.Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CustomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #bbada0;
  padding: 4px;
`;

export const CustomCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background: ${props => (props.background ? props.background : 'lightgray')};
  color: white;
  border-radius: 3px;
  margin: 0 3px;
  height: 25px;
  width: 25px;
  font-size: 30px;
`;
