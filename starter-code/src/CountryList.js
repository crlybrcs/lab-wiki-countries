import React from "react";
import { Link, Route } from "react-router-dom";
import countries from "./countries.json";
import "./App.css";
import CountryDetail from "./CountryDetail.js";

const CountryList = props => {
  // console.log("props before", props);

  return (
    <div>
      <div>
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <a class="navbar-brand" href="/">
              WikiCountries
            </a>
          </div>
        </nav>
        <div class="container">
          <div class="row">
            <div class="col-5">
              <div class="list-group">
                {/* create a list out of countries.json and use <Link> instead of <a> */}
                {/* list-group-item list-group-item-action */}
                {countries.map(item => {
                  return (
                    <div className="list-group-item list-group-item-action">
                      <Link to={`/${item.cca3}`}>
                        {item.flag} {item.name.common}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div class="col-7">
              <Route exact path="/:countryId" component={CountryDetail} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryList;
