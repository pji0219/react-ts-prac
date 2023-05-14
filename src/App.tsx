import React, { useState } from 'react';

import Products from './components/Products';
import { Address, Restaurant } from './model/restaurant';
import BestMenu from './components/BestMenu';

const data: Restaurant = {
  name: '맛있는 식당',
  category: '양식',
  address: {
    city: '서울',
    detail: '강남구',
    zipCode: 123,
  },
  menu: [
    { name: '티본 스테이크', price: 100000, category: '스테이크' },
    { name: '로제 파스타', price: 20000, category: '파스타' },
  ],
};

const App: React.FC = () => {
  const [products, setProducts] = useState<Restaurant>(data);

  const addressChangeHandler = (address: Address) => {
    setProducts((prev) => ({ ...prev, address }));
  };

  return (
    <>
      <Products
        products={products}
        addressChangeHandler={addressChangeHandler}
      />
      <BestMenu name='불고기 피자' category='피자' price={10000} star={5} />
    </>
  );
};

export default App;
