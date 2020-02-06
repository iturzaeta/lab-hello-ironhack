import React, { Component } from "react";
import Feature from "./Feature";
import './FeatureList.css'

class FeatureList extends Component {
  render() {
    return (
      <div className="listContainer">
        <Feature
          image="images/icon1.png"
          title="Declarative"
          description="React makes it painless to create declaratives UI´s"
        />
        <Feature
          image="images/icon2.png"
          title="Components"
          description="Build encapsulated components that manage their states"
        />
        <Feature
          image="images/icon3.png"
          title="Sigle-Way"
          description="A set of inmutable values are passed to the component´s"
        />
        <Feature
          image="images/icon4.png"
          title="JSX"
          description="Statically-typed, designed to run on modern browsers"
        />
      </div>
    );
  }
}

export default FeatureList