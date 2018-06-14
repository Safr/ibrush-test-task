import React from 'react';
import classes from './OrdersWrapper.css';
import OrdersList from '../OrdersList/OrdersList';
import Spinner from '../Spinner/Spinner';
import { OrderInterface } from '../../types';

interface Props {
  orders: null | object;
  changedOrders: string[];
  isFetching: boolean;
  onOpenPopup: (orderName: string, className: string, order: OrderInterface) => void;
  error: string;
}

const OrdersWrapper: React.SFC<Props> = ({ orders, changedOrders, isFetching, onOpenPopup, error }) => {
  return (
    <div className={classes.OrdersWrapper}>
      <h2 className={classes.TraiderHeader}>Сам себе трейдер</h2>
      <h3 className={classes.CurrencyHeader}>Валютные пары</h3>
      {error ? <h3>{error}</h3> : null}
      {isFetching && <Spinner />}
      {!isFetching && orders &&
        <OrdersList orders={orders} changedOrders={changedOrders} onOpenPopup={onOpenPopup} />}
    </div>
  );
};

export default OrdersWrapper;
