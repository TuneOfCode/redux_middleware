export interface IProductItem {
  id: number;
  title: string;
  price: number;
  descriptiton: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ICartItem {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}
