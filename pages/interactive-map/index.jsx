/* eslint-disable arrow-body-style */
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
import React, { Component } from 'react';
import USAMap from 'react-usa-map';
import axios from 'axios';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import styles from '../../styles/Home.module.css';
import data from '../../components/mapData';
import USAState from '../../components/USAState';
import civicKey from '../../config';

const dataStates = data();

class App extends Component {
  mapHandler(event) {
    if (event.target) {
      const stateNm = dataStates[event.target.dataset.name].name;
      console.log('Should be fullstate name -->', stateNm);
      const electionId = 2000;
      const key = civicKey.CIVIC_API;
      const address = ` , , ${stateNm} `;
      axios.get('https://www.googleapis.com/civicinfo/v2/voterinfo', { params: { key, address, electionId } })
        // .then((response) => {
        //   console.log('voter info', response.data);
        //   return {
        //     props: { response },
        //     redirect: { destination: `/${stateNm}`, permanent: false },
        //   };
        // });
        .then(() => {
          return {
            redirect: { destination: `/${stateNm}`, permanent: false },
          };
        });
    }
  }

  buildPaths() {
    const paths = [];
    for (const stateKey in dataStates) {
      const path = <USAState key={stateKey} stateName={dataStates[stateKey].name} dimensions={dataStates[stateKey].dimensions} state={stateKey} onClickState={this.mapHandler(stateKey)} />;
      paths.push(path);
    }
    return paths;
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className={styles.container}>
          <USAMap onClick={this.mapHandler} style={{ zIndex: '50' }} defaultFill="rgb(16, 39, 131)" />
          <g className="outlines">
            {this.buildPaths()}
          </g>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
