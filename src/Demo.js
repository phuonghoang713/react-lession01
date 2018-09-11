import React, { Component } from 'react';

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
          price: 6000000,
          status: true
        },
        {
          id:2,
          name: 'IphoneSixSIXPlus',
          price: 6000000,
          status: true
        },
        {
          id:3,
          name: 'IphoneSixSEVENPlus',
          price: 6000000,
          status: true
        },
        {
          id:4,
          name: 'IphoneEIGHTPlus',
          price: 6000000,
          status: true
        }
      ];
      var elements = products.map((product, index) => {
        return this.showInfoProduct(product)
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
