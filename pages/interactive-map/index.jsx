/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* estlint-disable arrow-body-style */
/* eslint-disable guard-for-in */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable max-len */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-sequences */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable lines-between-class-members */
import React, { Component } from "react";
import USAMap from "react-usa-map";
import { withRouter } from "next/router";
import Navbar from "../../components/navbar";
import styles from "../../styles/Home.module.css";
import data from "../../components/mapData";
import USAState from "../../components/USAState";

const dataStates = data();

class App extends Component {
  constructor(props) {
    super(props);
    this.mapHandler = this.mapHandler.bind(this);
    this.buildPaths = this.buildPaths.bind(this);
  }
  mapHandler(event) {
    if (event.target) {
      const stateNm = dataStates[event.target.dataset.name].name
        .replace(/\s+/g, "-")
        .toLowerCase();
      console.log("Should be fullstate name -->", stateNm);

      window.open(`https://www.vote411.org/${stateNm}`, "_blank", "noreferrer");
      // this.props.router.push(`/interactive-map/${stateNm}`);
    }
  }

  buildPaths() {
    const paths = [];
    for (const stateKey in dataStates) {
      const path = (
        <USAState
          key={stateKey}
          stateName={dataStates[stateKey].name}
          dimensions={dataStates[stateKey].dimensions}
          state={stateKey}
          onClickState={this.mapHandler(stateKey)}
          fill="#333"
        />
      );
      paths.push(path);
    }
    return paths;
  }

  render() {
    return (
      <Navbar>
        <div className="flex flex-row-reverse bg-blue">
          <h1 className="text-8xl font-black uppercase">
            Get Information By State
          </h1>
          <div className="">
            <USAMap
              onClick={this.mapHandler}
              style={{ zIndex: "50" }}
              defaultFill="rgb(16, 39, 131)"
            />
            <g className="bg-black-500">{this.buildPaths()}</g>
          </div>
        </div>
      </Navbar>
    );
  }
}

export default withRouter(App);
