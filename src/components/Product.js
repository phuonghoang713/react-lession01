import React, { Component } from 'react';

class Product extends Component {
  constructor(props){
    super(props);
    this.onClick =  this.onClick.bind(this);
  }
  onClick(){
    alert("You do" + this.props.children)
    console.log("You do" + this.props.children)
  }
  onClick2 = () => {
    alert(this.props.children)
  }
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="thumbnail">
          <img width={200} height={200} mode='fit' src={this.props.src} alt={this.props.children}></img>
          <div className="caption">
              <h3> {this.props.children} </h3>
              <h3> {this.props.price} VND</h3> 
            <p>
              <button type="button" className="btn btn-primary" onClick={ this.onClick2}>Buy</button>
              <button type="button" className="btn btn-default" onClick={ this.onClick}>Add To Wishlist</button>
            </p>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Product;
