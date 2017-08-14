import React, { Component } from "react";
import styled from "styled-components";
import HeadRoom from 'react-headroom';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222;
  height: 30px;
  color: white;
`;

class HeaderContainer extends Component {
  render() {
    return (
      <HeadRoom>
          <Container>
            <span>Test </span>
            <span>Test </span>
            <span>Test </span>
          </Container>
      </HeadRoom>
    );
  }
}

export default HeaderContainer;
