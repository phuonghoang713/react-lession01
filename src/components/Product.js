import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="thumbnail">
          <img width={300} height={500} mode='fit' src="https://cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/x/-/x-gray_1_16.jpg" alt="iphoneX"></img>
          <div className="caption">
            <h3>Iphone X</h3>
            <p>
              20.000.000 VND
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
