import React from 'react'

export const ProductList = (props) => {
  const products = props.products;

  return (
    <div id="product-list">
      <header>
        <strong>Product List {props.length} items</strong>
      </header>
      <table>
        <thead>
          <tr>
            {props.columns.id && <th>ID</th>}
            {props.columns.name && <th>Name</th>}
            {props.columns.department && <th>Department</th>}
            {props.columns.price && <th>Price</th>}
          </tr>
        </thead>
        <tbody>
          {products.map(product =>
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.department}</td>
              <td>{product.price}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
