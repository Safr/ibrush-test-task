import * as React from 'react';
import classes from './OrderItem.css';
import { OrderInterface } from '../../types';

interface Props {
  orderName: string;
  order: OrderInterface;
  changedPrice: string;
  onOpenPopup: (orderName: string, className: string, order: OrderInterface) => void;
}

const OrderItem: React.SFC<Props> = ({ orderName, order, changedPrice, onOpenPopup }) => {
  const handleOpenPopup = function () {
    onOpenPopup(orderName, className, order);
  };
  const className = changedPrice === 'up' ? 'Up'
    : changedPrice === 'down' ? 'Down' : '';
  return (
    <li className={classes.OrderItem}>
      <a onClick={handleOpenPopup}>
        <p className={classes[`${className}`]}>{orderName}</p>
        <span className={classes[`${className}`]}>{parseFloat(order.buy_price).toFixed(2).replace('.', ',')}</span>
      </a>
    </li>
  );
};

export default OrderItem;
