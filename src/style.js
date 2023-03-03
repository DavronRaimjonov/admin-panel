import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
    padding:0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
 }
 ul{
    list-style: none;
 }
 a{
    text-decoration: none;
 }
 img{
    max-width: 100%;
    height: auto;
 }
`;
export const Container = styled.div`
  max-width: 1250px;
  width: 100%;
  margin: 0 auto;
`;
