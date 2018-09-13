import React, { Component } from 'react';

class Newjsx extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       header: "Header from state...",
       content: "Content from state..."
    }
  }
  render() {
    return (
       <div>
          <h1>{this.state.header}</h1>
          <h2>{this.state.content}</h2>
          <br/>
          <h1>{this.props.headerProp}</h1>
          <h2>{this.props.contentProp}</h2>
       </div>
    );
  }

  
}
Newjsx.defaultProps = {
  headerProp: "default Header from props...",
  contentProp:"default Content from props..."
}
export default Newjsx;