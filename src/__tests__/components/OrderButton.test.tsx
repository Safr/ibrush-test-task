import React from 'react';
import { shallow } from 'enzyme';
import OrderButton from '../../components/OrderButton/OrderButton';

describe('OrderButton Component', () => {
  let wrapper;
  let onFetchOrders;
  beforeEach(() => {
    onFetchOrders = jest.fn();
    wrapper = shallow(
      <OrderButton
        onFetchOrders={onFetchOrders}
      />,
    );
  });
  test('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should handle onFetchOrders', () => {
    wrapper.find('button').simulate('click');
    expect(onFetchOrders).toHaveBeenCalled();
  });
});
