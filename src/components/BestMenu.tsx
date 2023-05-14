import React from 'react';

import { Menu } from '../model/restaurant';

interface OwnProps extends Menu {
  star: number;
}

// 위와 동일
/* type OwnProps = Menu & {
  star: number;
} */

const BestMenu: React.FC<OwnProps> = ({ name, category, price, star }) => {
  return (
    <div>
      <span>{name}</span>
      <span>{category}</span>
      <span>{price}</span>
      <span>{star}</span>
    </div>
  );
};

export default BestMenu;
