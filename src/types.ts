export interface Product {
  id: number;
  name: string;
  description: string;
  videoUrl: string;
  price: number;
  ingredients_option: string[];
}

export interface Order {
  id: number;
  date: string;
  customer_name: string;
  items: string;
  status: 'pending' | 'preparing' | 'ready' | 'completed';
  total: number;
}
