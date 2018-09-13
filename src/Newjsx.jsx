import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Newjsx extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       header: "Header from state...",
       content: "Content from state..."
    }
  }

  forceUpdateHandler = () => {
    this.forceUpdate();
  };
  
  findDomNodeHandler = () => {
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'green';
    
  }

  render() {
    return (
      <div>
        <h1>{this.state.header}</h1>
        <h2>{this.state.content}</h2>
        <br/>
        <h1>{this.props.headerProp}</h1>
        <h2>{this.props.contentProp}</h2>
        <h4>Random number A : {Math.random()}</h4>
        <div>
          <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
          <h4>Random number B : {Math.random()}</h4>
        </div>
        <div>
            <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
            <div id = "myDiv">NODE</div>
         </div>
      </div>
       
    );
  }

  
}
Newjsx.defaultProps = {
  headerProp: "default Header from props...",
  contentProp:"default Content from props..."
}
export default Newjsx;