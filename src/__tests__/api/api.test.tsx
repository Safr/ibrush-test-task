import { fetchOrders, fetchOrderBook } from '../../api';

describe('API Caller', () => {
  let fetchSpy;
  beforeEach(() => {
    fetchSpy = global.fetch;
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({}));
  });

  afterEach(() => {
    global.fetch = fetchSpy;
    jest.resetAllMocks();
  });
  test('should call fetchOrders', () => {
    return fetchOrders()
      .then(() => {
        expect(global.fetch).toHaveBeenCalledWith('https://api.exmo.com/v1/ticker/');
      });
  });
  test('should call fetchOrderBook', () => {
    return fetchOrderBook('BTC_USD')
      .then(() => {
        expect(global.fetch).toHaveBeenCalledWith('https://api.exmo.com/v1/order_book/?limit=50&pair=BTC_USD');
      });
  });

  test('should return exmo response in JSON format', () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => ({ orders: {} }),
    }));

    return fetchOrders()
      // tslint:disable-next-line:ter-arrow-parens
      .then(response => {
        expect(response).toEqual({ orders: {} });
      });
  });
  test('should return exmo orderBook response in JSON format', () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => ({ orderBook: {} }),
    }));

    return fetchOrderBook('BTC_USD')
      // tslint:disable-next-line:ter-arrow-parens
      .then(response => {
        expect(response).toEqual({ orderBook: {} });
      });
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
});
