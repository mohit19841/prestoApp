import React from 'react';
import {
  Link,
} from "react-router-dom";

const ProductList = ({ allProducts }) => {
  return (
    <>
      <div>
        <h1>Product List</h1>
      </div>
      <table >
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Category</td>
            <td>Price</td>
            <td>Tax</td>
            <td>availability</td>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((item, index) => (
            <tr key={index}>
              <td><Link to={`/${item.itemId}`}><span className={'link'}>{item.itemId}</span></Link></td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.tax}</td>
              <td>{item.available ? 'Aviable' : 'Not Available'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProductList;