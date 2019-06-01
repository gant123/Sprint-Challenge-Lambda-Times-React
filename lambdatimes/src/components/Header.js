import React from 'react';
import styled from "styled-components";

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const LambdaHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  @media (min-width: 1280px) {
    .header {
      width: 1280px;
    }
  }
`;
const DateCss = styled.header`
margin-left: 25px;
  flex: 1;
`;

const H1Css = styled.header`
 font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

const TempHeader = styled.header`
 text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const Header = () => {
  return (
    <LambdaHeader> 
      <DateCss>SMARCH 32, 2018</DateCss>
      <H1Css>Lambda Times</H1Css>
      <TempHeader>98°</TempHeader>
    </LambdaHeader>
  )
}

export default Header