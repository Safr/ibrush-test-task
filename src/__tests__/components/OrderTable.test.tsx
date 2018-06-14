import React from 'react';
import { shallow } from 'enzyme';
import OrderTable from '../../components/OrderTable/OrderTable';
import { orderBookInfo } from '../../__mocks__';

describe('OrderTable Component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<OrderTable orderBook={orderBookInfo} />);
    expect(wrapper).toMatchSnapshot();
  });
});
