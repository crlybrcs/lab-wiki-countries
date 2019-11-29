import React from "react";
import { Link } from "react-router-dom";
import countries from "./countries.json";
import "./App.css";

const CountryDetail = props => {
  console.log("countryDetail BEFORE:", props);

  const countryId = props.match.params.countryId;

  const country = countries.find(el => {
    return el.cca3 === countryId;
  });

  console.log(countryId, country);
  return (
    <div className="col-7">
      <h1>{country.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td>{country.name.common}</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>{country.area}</td>
            <td>
              {country.area * 1000} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {country.borders.map(el => {
                  let reqCountry = countries.find(country => {
                    return country.cca3 === el;
                  });
                  return (
                    <li key={el}>
                      <Link to={`/${el}`}>{reqCountry.name.common}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
