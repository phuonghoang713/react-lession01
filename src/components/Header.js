import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Apple Store</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">List Products</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
