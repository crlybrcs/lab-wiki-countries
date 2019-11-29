import React from "react";
import { NavLink, Route } from "react-router-dom";
import countries from "./countries.json";
import "./App.css";
import CountryDetail from "./CountryDetail.js";

const CountryList = props => {
  // console.log("props before", props);

  return (
    <div>
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="list-group">
                {/* create a list out of countries.json and use <Link> instead of <a> */}
                {/* list-group-item list-group-item-action */}
                {countries.map(item => {
                  return (
                    <NavLink
                      key={item.cca3}
                      className="list-group-item list-group-item-action"
                      to={`/${item.cca3}`}
                    >
                      {item.flag} {item.name.common}
                    </NavLink>
                  );
                })}
              </div>
            </div>
            <div className="col-7">
              <Route exact path="/:countryId" component={CountryDetail} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryList;
