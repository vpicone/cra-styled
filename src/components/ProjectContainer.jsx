import React, { Component } from "react";
import styled from "styled-components";
import ST from "./ST.png";
import FB from "./FB.png";
import BB from "./BB.png";
import AB from "./AB.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #222;
  margin-bottom: 50px;
  border-radius: 4px;
  color: white;
  padding: 10px;
`;

const Blurb = styled.div`
  margin: 20px;
  width: 200px;
`;

const Visit = styled.a`
  background: #222;
  color: white;
  transition: background 0.6s;
  &:hover {
    background: white;
    color: #222;
  }
  &.primary {
    background: white;
    color: #222;
  }
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #222;
  border-radius: 4px;
  text-decoration: none;
`;

const Title = styled.h2`
  text-align: center;
  margin-top: 20px;
`;

const Image = styled.img`margin: 20px;`;

class ProjectContainer extends Component {
  render() {
    return (
      <div
        style={{
          margin: "auto",
          maxWidth: "800px"
        }}
      >
        <Title>
          <Visit
            target="_blank"
            rel="noopener noreferrer"
            href="https://chrome.google.com/webstore/detail/sorry-tennessee/pnfibhfelcbokechjfmghnmgbchpijaj"
          >
            Sorry TN
          </Visit>
        </Title>
        <Container>
          <Blurb>
            <p>
              As seen in the Austin Statesman, my friend's text messages, and my
              Mom's refrigerator. Removes Tennessee from most drop down menus
              across the web for the greater good of Texans.
            </p>
          </Blurb>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://chrome.google.com/webstore/detail/sorry-tennessee/pnfibhfelcbokechjfmghnmgbchpijaj"
          >
            <Image src={ST} />
          </a>
        </Container>
        <Title>
          <Visit
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.followbud.us"
          >
            Followbud.us
          </Visit>
        </Title>

        <Container>
          <Blurb>
            <p>
              Spotify's follow feature allows you to receive notifications when
              your favorite artists release new music. Followbud allows you to
              easily follow all of the artists in your favorite Spotify
              playlists.
            </p>
          </Blurb>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.followbud.us"
          >
            <Image src={FB} />
          </a>
        </Container>

        <Title>
          <Visit
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antibuddy.com"
          >
            Antibuddy.com
          </Visit>
        </Title>

        <Container>
          <Blurb>
            <p>
              Antibuddy is a CRUD app with smart search powered by firebase.
              Utilizes React, Material.ui, Firebase, Now.sh under the hood.
            </p>
          </Blurb>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antibuddy.com"
          >
            <Image src={AB} />
          </a>
        </Container>

        <Title>
          <Visit
            target="_blank"
            rel="noopener noreferrer"
            href="www.bloodbankpal.com"
          >
            Bloodbankpal.com
          </Visit>
        </Title>
        <Container>
          <Blurb>
            <p>
              The bloodbank courier schedule was outdated and difficult to read.
              The schedule updates in real time and implements Googles Material
              Design pattern for readability. Uses webpack, react, react-router,
              material-ui, and Now for deployment.
            </p>
          </Blurb>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="www.bloodbankpal.com"
          >
            <Image src={BB} />
          </a>
        </Container>
      </div>
    );
  }
}

export default ProjectContainer;
