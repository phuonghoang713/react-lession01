import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      // <div>
      //   <h1>
      //     Header
      //   </h1>
      // </div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <a className="nacbar-brand" href="#">Title</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
