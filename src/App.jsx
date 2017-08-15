import React, { Component } from "react";
import HeaderContainer from "./components/HeaderContainer";
import ProjectContainer from "./components/ProjectContainer";
import ConnectContainer from "./components/Connect/ConnectContainer";
import ScrollableAnchor, { configureAnchors } from "react-scrollable-anchor";
import "./App.css";

configureAnchors({ scrollDuration: 850 });

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer />
        <a href="#connect"> Go to section 1 </a>
        <ProjectContainer />
        <ScrollableAnchor id={"connect"}>
          <ConnectContainer />
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
