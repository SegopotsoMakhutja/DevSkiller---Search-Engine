import React, { useState } from 'react'

import '../styles/Search.css';
import { ToggleColumns } from './ToggleColumns';
import { ProductList } from './ProductList';
import { FilterForm } from './FilterForm';

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

  // return filtered props by range priceFrom and priceTo
  // also filter by higher from priceFrom and lower from priceTo
  const filterProducts = () => {
    const { priceFrom, priceTo } = price;
    const { products } = props;

    // this is a no operation return.
    if (priceFrom === '' && priceTo === '') {
      return products;
    }

    // filter by a higher priceFrom and a lower priceTo
    if (priceFrom !== '' && priceTo !== '') {
      return products.filter(product => {
        const price = Number(product.price);
        return price >= Number(priceFrom) && price <= Number(priceTo);
      });
    }

    // filter by a lower priceFrom or a higher priceTo
    if (priceFrom !== '') {
      return products.filter(product => {
        const price = Number(product.price);
        return price >= Number(priceFrom);
      });
    }

    // filter by a higher priceFrom
    if (priceTo !== '') {
      return products.filter(product => {
        const price = Number(product.price);
        return price <= Number(priceTo);
      });
    }
  };

  let displayedProducts = filterProducts();

  return (
    <div className="Products">
      <FilterForm
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        onPriceInputChange={onPriceInputChange}
      />

      <ToggleColumns
        onCheckboxClick={onCheckboxClick}
        columns={columns} 
      />

      <ProductList
        products={displayedProducts}
        columns={columns}
      />
    </div>
  );
}

export default Search;