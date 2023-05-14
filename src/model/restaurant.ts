export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = {
  city: string;
  detail: string;
  zipCode: number;
};

export type Menu = {
  name: string;
  price: number;
  category: string;
};

export type AddressWithoutZip = Omit<Address, 'zipCode'>;
export type RestaurantOnlyCategor = Pick<Menu, 'category'>;

export type ApiResponse<T> = {
  data: T[];
  totalPage: number;
  page: number;
};

export type RestaurantRes = ApiResponse<Restaurant>;
export type MenuRes = ApiResponse<Menu>;
