import React, { Component } from 'react';
import Product from './components/Product';
class Demo extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        {
          id:1,
          name: 'IphoneSixPlus',
          src: 'https://cellphones.com.vn/media/catalog/product/cache/7/image/9df78eab33525d08d6e5fb8d27136e95/x/-/x-gray_1_16.jpg',
          price: 26000000,
          status: true
        },
        {
          id:2,
          name: 'IphoneSixSIXPlus',
          src: 'https://cellphones.com.vn/media/catalog/product/cache/7/thumbnail/9df78eab33525d08d6e5fb8d27136e95/x/-/x-gray-back_1_8_1.png',
          price: 16000000,
          status: true
        },
        {
          id:3,
          name: 'IphoneSixSEVENPlus',
          src: 'https://i.blogs.es/075b3e/iphone-x/450_1000.png',
          price: 9000000,
          status: true
        },
        {
          id:4,
          name: 'IphoneEIGHTPlus',
          src: 'https://i2.cdn.turner.com/money/dam/assets/171031000744-iphone-x-notch-780x439.jpg',
          price: 6000000,
          status: true
        }
      ],
      isActive : true
    };
  }

  onSetState = () => {
    this.setState({
      isActive : !this.state.isActive
    });
  }
  render() {

      
      var elements = this.state.products.map((product, index) => {
        let result = '';
        if(product.status){
          result = <tr>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>
                        <span className="label label-success">{product.price} VND</span>
                      </td>
                    </tr>
        }
        return result
      });
      return  (
        <div className="container">
          <div className="row">
            <div className="row">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {elements}
                </tbody>
              </table>
              <button type="button" className="btn btn-success" onClick={this.onSetState}>
                Active: {this.state.isActive === true ? 'true' : 'false'}
              </button>
            </div>
          </div>
        </div>
      )
  }
}

export default Demo;
