import React, { Component } from "react";
import styled from "styled-components";
import StyledLogo from "./StyledLogo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

class HeaderContainer extends Component {
  render() {
    return (
      <Container>
        <StyledLogo />
        <h2>Welcome to React</h2>
      </Container>
    );
  }
}

export default HeaderContainer;
