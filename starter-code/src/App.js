import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import CountryList from "./CountryList.js";
import countries from "./countries.json";
import CountryDetail from "./CountryDetail.js";

// const NotFound = () => {
//   return <div>404 not found</div>;
// };

function App() {
  return (
    <div className="App">
      <CountryList />
    </div>
  );
}

export default App;
