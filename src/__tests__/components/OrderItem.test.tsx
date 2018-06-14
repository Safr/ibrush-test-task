import React from 'react';
import { shallow } from 'enzyme';
import OrderItem from '../../components/OrderItem/OrderItem';
import { order } from '../../__mocks__';

describe('OrderItem Component', () => {
  let wrapper;
  let onOpenPopup;
  beforeEach(() => {
    onOpenPopup = jest.fn();
    wrapper = shallow(
      <OrderItem
        orderName="BTC_USD"
        order={order}
        changedPrice=""
        onOpenPopup={onOpenPopup}
      />,
    );
  });
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should handle onOpenPopup', () => {
    wrapper.find('a').simulate('click');
    expect(onOpenPopup).toHaveBeenCalledWith('BTC_USD', '', order);
  });
});
