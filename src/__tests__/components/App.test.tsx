import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';
import { fetchOrders, fetchOrderBook } from '../../api';
import { order } from '../../__mocks__';

describe('App Component', () => {
  let wrapper;
  let fetchSpy;
  let fetchPromise;
  beforeEach(() => {
    wrapper = shallow(
      <App />,
    );
    fetchSpy = global.fetch;
    fetchPromise = Promise.resolve({
      json: () => Promise.resolve({}),
    });
    global.fetch = () => fetchPromise;
  });
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should set state from localStorage', () => {
    const KEY = 'orders';
    const VALUE = 'bar';
    wrapper.instance().componentDidMount();
    wrapper.update();
    expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY);
  });
  test('should set state isOpen to false', () => {
    wrapper.instance().handleClosePopup();
    expect(wrapper.state('isOpen')).toBe(false);
  });
  test('should handle handleOrderBook', async () => {
    wrapper.instance().handleOrderBook();
    await expect(fetchOrderBook('BTC_USD')).resolves.toEqual({});
    expect(wrapper.state('orderBook')).toEqual({});
  });
  test('should handle handleOrders', async () => {
    wrapper.instance().handleOrders();
    await expect(fetchOrders()).resolves.toEqual({});
    expect(wrapper.state('orders')).toEqual({});
  });
  test('should handle openPopup', () => {
    const expected = {
      BTC_USD: order,
      className: '',
    };
    wrapper.instance().handleOpenPopup('BTC_USD', '', order);
    expect(wrapper.state('isOpen')).toBe(true);
    expect(wrapper.state('currentOrder')).toEqual(expected);
    expect(wrapper.state('orderBook')).toBe(null);
  });
});
