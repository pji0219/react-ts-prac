import React from 'react';

import { Menu } from '../model/restaurant';

interface OwnProps {
  menu: Menu;
}

const Product: React.FC<OwnProps> = ({ menu: { name, price, category } }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{price}</p>
      <p>{category}</p>
    </li>
  );
};

export default Product;
