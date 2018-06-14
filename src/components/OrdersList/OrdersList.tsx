import React from 'react';
import cuid from 'cuid';
import classes from './OrderList.css';
import OrderItem from '../OrderItem/OrderItem';
import { OrderInterface } from '../../types';

interface Props {
  orders: object;
  changedOrders: string[];
  onOpenPopup: (orderName: string, className: string, order: OrderInterface) => void;
}

const OrdersList: React.SFC<Props> = ({ orders, changedOrders, onOpenPopup }) => {
  return (
    <ul className={classes.List}>
      {Object.keys(orders).slice(0, 10).map((orderName: string, idx: number) => (
        <OrderItem
          key={orderName}
          orderName={orderName}
          order={orders[orderName]}
          changedPrice={changedOrders !== null ? changedOrders[idx] : ''}
          onOpenPopup={onOpenPopup}
        />
      ))}
    </ul>
  );
};

export default OrdersList;
