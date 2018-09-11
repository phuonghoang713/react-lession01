import React, { Component } from 'react';

class Product extends Component {
  onClick(param, param1){
    alert("You do"+param + ";" + param1)
    console.log("You do"+param + ";" + param1)
  }
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="thumbnail">
          <img width={200} height={200} mode='fit' src={this.props.src} alt={this.props.children}></img>
          <div className="caption">
     
              <h3> {this.props.children} </h3>
            
              <h3> {this.props.price}  VND</h3> 
         
            <p>
              <button type="button" className="btn btn-primary" onClick={() => this.onClick('Buy', this.props.children)}>Buy</button>
              <button type="button" className="btn btn-default" onClick={() => this.onClick('Add To Wishlist', this.props.children)}>Add To Wishlist</button>
            </p>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Product;
