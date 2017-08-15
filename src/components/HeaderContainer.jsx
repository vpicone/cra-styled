import React, { Component } from "react";
import styled from "styled-components";
import StyledLogo from "./StyledLogo";
import HeadRoom from "react-headroom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222;
  height: 125px;
  color: white;
`;

class HeaderContainer extends Component {
  render() {
    return (
      <HeadRoom>
        <Container>
          <StyledLogo />
          <div>
            <h2>Vince Picone</h2>
          </div>
        </Container>
      </HeadRoom>
    );
  }
}

export default HeaderContainer;
