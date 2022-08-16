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
  quantity?: number;
}

export interface IProductState {
  products: IProductItem[];
  isLoading: boolean;
}

export interface ICartState {
  quantity: {
    [id: number]: number;
  };
  price: {
    [id: number]: number;
  };
  countCart: number;
  total: number;
}
