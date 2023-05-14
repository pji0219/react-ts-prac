import React from 'react';

import { Address, Restaurant } from '../model/restaurant';
import Product from './Product';

interface OwnProps {
  products: Restaurant;
  addressChangeHandler(adress: Address): void;
}

const Products: React.FC<OwnProps> = ({ products }) => {
  return (
    <div>
      <h2>{products.name}</h2>
      <p>{products.category}</p>
      <p>{products.address.city}</p>
      <p>{products.address.detail}</p>
      <p>{products.address.zipCode}</p>
      <ul>
        {products.menu.map((menu) => (
          <Product menu={menu} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
