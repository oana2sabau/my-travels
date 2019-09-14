import React, { Component } from "react";
import "./App.css";
import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travel
          image="https://cdn.knd.ro/media/521/2863/554/20014409/1/oradea.jpg"
          name="Oradea"
          destination="Oradea"
          country="Romania"
          distance="800 km"
        />
        <Travel
          image="https://ssl.tzoo-img.com/images/tzoo.18886.0.651788.Singapore.jpg?width=1280&spr=2"
          name="Singapore"
          destination="Singapore"
          country="Singapore"
          distance="8000 km"
        />
      </div>
    );
  }
}

export default App;
