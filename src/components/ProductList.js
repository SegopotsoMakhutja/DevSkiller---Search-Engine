import React from 'react'

export const ProductList = (props) => {
  const products = props.products;

  return (
    <div id="product-list">
      <header>
        <strong>Product List ({props.products.length} items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            {/* show only selected headers */}
            {Object.keys(props.columns).map(column => {
              if (props.columns[column]) {
                return (
                  <th key={column}>{column}</th>
                )
              }
              return null;
            })}
          </tr>
        </thead>
        <tbody>
            {/* show only selected rows and columns */}
            {products.map(product => {
              return (
                <tr key={product.id}>
                  {Object.keys(props.columns).map(column => {
                    if (props.columns[column]) {
                      return (
                        <td key={column}>{product[column]}</td>
                      )
                    }
                    return null;
                  })}
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}
