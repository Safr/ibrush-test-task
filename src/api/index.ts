export const fetchOrders = async (): Promise<object|string> => {
// export const fetchOrders = async () => {
  const endPoint = 'https://api.exmo.com/v1/ticker/';
  try {
    const apiResponse = await fetch(endPoint);
    const orders = await apiResponse.json();
    return orders;
  } catch (e) {
    return e.message;
  }
};

export const fetchOrderBook = async (pair: string): Promise<object|string> => {
  const endPoint = `https://api.exmo.com/v1/order_book/?limit=50&pair=${pair}`;
  try {
    const apiResponse = await fetch(endPoint);
    const orderBookInfo = await apiResponse.json();
    return orderBookInfo;
  } catch (e) {
    return e.message;
  }
};
