import React from 'react';
import { shallow } from 'enzyme';
import OrdersList from '../../components/OrdersList/OrdersList';
import { orders, changedOrders } from '../../__mocks__';

describe('OrdersList Component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(
      // tslint:disable-next-line:jsx-no-lambda
      <OrdersList orders={orders} changedOrders={changedOrders} onOpenPopup={() => null} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
