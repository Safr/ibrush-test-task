import React from 'react';
import { shallow } from 'enzyme';
import OrdersWrapper from '../../components/OrdersWrapper/OrdersWrapper';
import { orders, changedOrders } from '../../__mocks__';

describe('OrdersWrapper Component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(
      // tslint:disable-next-line:jsx-no-lambda
      <OrdersWrapper
        orders={orders}
        changedOrders={changedOrders}
        isFetching={false}
        // tslint:disable-next-line:jsx-no-lambda
        onOpenPopup={() => null}
        error={''}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
