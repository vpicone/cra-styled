import React, { Component } from "react";
import Github from "./github.svg";
import Linkedin from "./linkedin.svg";
import Twitter from "./twitter.svg";
import styled from "styled-components";

const SocialLink = styled.img`height: 75px;`;

class ConnectContainer extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "600px",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "400px"
        }}
      >
        <h1>Let's build something together...</h1>
        <div>
          <a style={{ margin: "10px" }} href="https://www.github.com/vpicone">
            <SocialLink src={Github} />
          </a>
          <a
            style={{ margin: "10px" }}
            href="https://www.twitter.com/TheElodin"
          >
            <SocialLink src={Twitter} />
          </a>
          <a
            style={{ margin: "10px" }}
            href="https://www.linkedin.com/in/vincentpicone/"
          >
            <SocialLink src={Linkedin} />
          </a>
        </div>
      </div>
    );
  }
}

export default ConnectContainer;
