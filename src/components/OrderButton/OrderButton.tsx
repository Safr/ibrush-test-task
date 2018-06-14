import React from 'react';
import classes from './OrderButton.css';

interface Props {
  onFetchOrders: () => void;
}

const OrderButton: React.SFC<Props> = ({ onFetchOrders }) => {
  return (
    <button
      className={classes.OrderBtn}
      onClick={onFetchOrders}
    >
     Взять ордеры
    </button>
  );
};

export default OrderButton;
