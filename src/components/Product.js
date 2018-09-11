import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="thumbnail">
          <img width={300} height={500} mode='fit' src={this.props.src} alt={this.props.children}></img>
          <div className="caption">
              <h3> {this.props.children} </h3>
            <p>
              <h3> {this.props.price}  VND</h3> 
            </p>
            <p>
              <a href="#" className="btn btn-primary">Buy</a>
              <a href="#" className="btn btn-default">Add To Wishlist</a>
            </p>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Product;
