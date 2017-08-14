import React, { Component } from "react";
import styled from "styled-components";
import StyledLogo from "./StyledLogo";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222;
  height: 150px;
  color: white;
`;

class HeaderContainer extends Component {
  render() {
    return (
      <Container>
        <StyledLogo />
        <div>
          <h2>Vince P. Picone</h2>
          <h3>Austin, TX</h3>
        </div>
      </Container>
    );
  }
}

export default HeaderContainer;
