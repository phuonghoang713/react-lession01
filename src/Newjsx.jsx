import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Newjsx extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       header: "Header from state...",
       content: "Content from state...",
       data: 0
    }
  }

  forceUpdateHandler = () => {
    console.log('force updater')
    this.forceUpdate();
  };
  
  findDomNodeHandler = () => {
    var myDiv = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myDiv).style.color = 'green';
    
  }
  setNewNumber = () => {
    this.setState({data: this.state.data + 1})
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
          <h4>Random number B : {Math.random()} {console.log('render radom again')}</h4>
        </div>
        <div>
            <button onClick = {this.findDomNodeHandler}>FIND DOME NODE</button>
            <div id = "myDiv">NODE</div>
        </div>
        <div>
            <button onClick = {this.setNewNumber}>test lifecycle ex INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
        </div>
      </div>
       
    );
  }

  
}
{/*lifecycle method*/}
class Content extends React.Component {
  componentWillMount() {
     console.log('Component WILL MOUNT!')
  }
  componentDidMount() {
     console.log('Component DID MOUNT!')
  }
  componentWillReceiveProps(newProps) {    
     console.log('Component WILL RECIEVE PROPS!')
  }
  shouldComponentUpdate(newProps, newState) {
     return true;
  }
  componentWillUpdate(nextProps, nextState) {
     console.log('Component WILL UPDATE!');
  }
  componentDidUpdate(prevProps, prevState) {
     console.log('Component DID UPDATE!')
  }
  componentWillUnmount() {
     console.log('Component WILL UNMOUNT!')
  }
  render() {
     return (
        <div>
           <h3>{this.props.myNumber}</h3>
        </div>
     );
  }
}

Newjsx.defaultProps = {
  headerProp: "default Header from props...",
  contentProp:"default Content from props..."
}
export default Newjsx;