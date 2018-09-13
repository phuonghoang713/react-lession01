import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Dem from './Demo';
import Newjsx from './Newjsx'
import Refs_ex from './Refs_exam'
class App extends Component {
  constructor(props){
    super(props);
    this.onSearch = this.onSearch.bind(this)
  }
  onSearch(){
    console.log(this.refs.search_name.value);
  }
  render() {
    
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">State</a>
            </div>
        
            
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                <li><a href="#">Link</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
              </ul>
              <form className="navbar-form navbar-left">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search" ref="search_name"></input>
                </div>
                <button type="button" className="btn btn-default" onClick={this.onSearch} >Submit</button>
              </form>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Link</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        <Header></Header>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          </div>
        </div>
        <Dem />
        <Newjsx 
          headerProp = "Header from props..." 
          contentProp = "Contentfrom props..."
    
        />
        <Refs_ex />

      </div>
    );
  }
}

export default App;
