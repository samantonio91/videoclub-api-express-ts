export interface Customer {
  id: number;
  documentId?: string;
  name: string;
  phone?: string;
  email?: string;
}

export interface Product {
  id: number;
  code: number;
  title: string;
  price: number;
}

export interface Game extends Product {
  platform: string;
  genre: string;
}
