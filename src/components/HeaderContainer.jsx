import React, { Component } from "react";
import styled from "styled-components";
import StyledLogo from "./StyledLogo";
import HeadRoom from "react-headroom";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #222;
  height: 125px;
  color: white;
`;

const ButtonLink = styled.a`
  color: white;
  margin: 5px;
  text-decoration: none;
`;

class HeaderContainer extends Component {
  render() {
    return (
      <HeadRoom>
        <Container>
          <div style={{ flex: "1.5", textAlign: "right" }}>
            <StyledLogo />
          </div>
          <div style={{ flex: "1" }}>
            <Typography type="display1">
              <span style={{ color: "white" }}>Vince Picone</span>
            </Typography>
          </div>
          <div style={{ flex: "1.5", textAlign: "left" }}>
            <ButtonLink href="#projects">
              <Button dense>
                <span style={{ color: "white" }}>Projects</span>
              </Button>
            </ButtonLink>
            <br />
            <ButtonLink href="#connect">
              <Button dense>
                <span style={{ color: "white" }}>Connect</span>
              </Button>
            </ButtonLink>
          </div>
        </Container>
      </HeadRoom>
    );
  }
}

export default HeaderContainer;
