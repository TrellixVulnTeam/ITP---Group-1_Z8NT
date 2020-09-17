import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CivilDomesticAbuseAffairsNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand"></Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto ">
            <li className="navbar-item mr-5">
              <Link to="/DomesticAbuseComplainList" className="nav-link">
                Complains
              </Link>
            </li>
            <li className="navbar-item mr-5">
              <Link to="/DomesticAbuseComplain" className="nav-link">
                Add Complain
              </Link>
            </li>
            <li className="navbar-item mr-5">
              <Link to="/DomesticAbuseApeal" className="nav-link">
                Add Appeal
              </Link>
            </li>
            <li className="navbar-item mr-5">
              <Link to="/DomesticAbuseLegal" className="nav-link">
                Legal Examination Form
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
