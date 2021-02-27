import React, { Component } from "react";
import Background from "./Background";
import HeaderText from "./HeaderText";

class Header extends Component {
  render() {
    if (this.props.data) {
      var cheers = this.props.data.cheers;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.titleCity;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner" id="head-text">
          <div className="banner-text">
            <HeaderText data={cheers}></HeaderText>
            <h3>
              {city} based <span>{occupation}</span>. {description}.
            </h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
        <div className="background">
          <Background></Background>
        </div>
      </header>
    );
  }
}

export default Header;
