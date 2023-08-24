interface Guarantee {
  start: Date;
  end: Date;
}

interface Price {
  value: number;
  symbol: string;
  isDefault: number;
}

export interface Product {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: Guarantee;
  price: Price[];
  order: number;
  date: Date;
}