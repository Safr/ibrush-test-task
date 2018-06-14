export interface OrderInterface {
  avg: string;
  buy_price: string;
  high: string;
  last_trade: string;
  low: string;
  sell_price: string;
  updated: number;
  vol: string;
  vol_curr: string;
}

export type OrderBookInfo = string[];

export interface OrderInfo {
  ask_quantity: string;
  ask_amount: string;
  ask_top: string;
  bid_quantity: string;
  bid_amount: string;
  bid_top: string;
  ask: OrderBookInfo[];
  bid: OrderBookInfo[];
}
