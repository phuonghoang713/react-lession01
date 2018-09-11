import React, { Component } from 'react';
import Product from './components/Product';
class Demo extends Component {
  showInfoProduct(product){

    if(product.status){
      return <h3 key = {product.id} >
              ID : {product.id} <br/>
              Name: {product.name} <br/>
              Price: {product.price} VND<br/>
              Status: {product.status ? 'Active' : 'Pending'}
            </h3>
    }
  }
  render() {
      var a = 5;
      var name = "Hoang Peter";
      var b = 7;
      var products = [
        {
          id:1,
          name: 'IphoneSixPlus',
          src: 'https://cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/x/-/x-gray_1_16.jpg',
          price: 6000000,
          status: true
        },
        {
          id:2,
          name: 'IphoneSixSIXPlus',
          src: 'https://cellphones.com.vn/media/catalog/product/cache/7/thumbnail/9df78eab33525d08d6e5fb8d27136e95/x/-/x-gray-back_1_8_1.png',
          price: 6000000,
          status: true
        },
        {
          id:3,
          name: 'IphoneSixSEVENPlus',
          src: 'https://i.blogs.es/075b3e/iphone-x/450_1000.png',
          price: 6000000,
          status: false
        },
        {
          id:4,
          name: 'IphoneEIGHTPlus',
          src: 'https://i2.cdn.turner.com/money/dam/assets/171031000744-iphone-x-notch-780x439.jpg',
          price: 6000000,
          status: true
        }
      ];
      var elements = products.map((product, index) => {
       
        return <Product
                  key={product.id}
                  price={product.price}
                  src={product.src}
                >
                  {product.name}
                </Product>
      });
      return  (
        <div className="ml-30">
          
          <h2>
            a: { a } <br/>
            b: {b} <br/>
            a+b = {a+b}
          </h2>
          <h3>
            name : { name }
          </h3>
          
          { elements } <br/>
          
        </div>
      )
  }
}

export default Demo;
