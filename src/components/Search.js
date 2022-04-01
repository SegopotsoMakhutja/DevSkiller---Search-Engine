import React, { useState } from 'react'

import '../styles/Search.css';
import { ToggleColumns } from './ToggleColumns';
import { ProductList } from './ProductList';
import { FilterForm } from './FilterForm';

import products from '../assets/products.json'

export const Search = (props) => {
  const [price, setPrice] = useState({ priceFrom: '', priceTo: '' });

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceInputChange = (name, value) => {
    setPrice({ ...price, [name]: value });
  }

  const onCheckboxClick = (name, checked) => {
    setColumns({ ...columns, [name]: checked });
  }

  // array to show only products that match the price range and columns checked.
  const filterProducts = (data, price, columns) => {
    return data.filter((product) => {
      return product.price >= price.priceFrom && product.price <= price.priceTo &&
        Object.keys(columns).every(key => columns[key]);
    });
  };

  let displayedProducts = filterProducts(products, price, columns);

  return (
    <div className="Products">
      <FilterForm
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        onPriceInputChange={onPriceInputChange} />

      <ToggleColumns
        onCheckboxClick={onCheckboxClick}
        columns={columns} />

      <ProductList
        products={displayedProducts}
        columns={columns} />
    </div>
  );
}

export default Search;
