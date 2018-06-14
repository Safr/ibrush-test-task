import React from 'react';
import classes from './OrderTable.css';
import { OrderBookInfo } from '../../types';

interface Props {
  orderBook: OrderBookInfo[];
}

const OrderTable: React.SFC<Props> = ({ orderBook }) => {
  const renderOrderBookInfo = () => {
    let price: string;
    let quantity: string;
    let amount: string;
    return orderBook.map((orderArray, idx) => {
      price = orderArray[0];
      quantity = orderArray[1];
      amount = orderArray[2];
      return (
        <tr key={idx + price}>
          <td>{price}</td>
          <td>{quantity}</td>
          <td>{amount}</td>
        </tr>
      );
    });
  };
  return (
    <div className={classes.TableWrapper}>
      <table className={classes.Table}>
        <thead>
          <tr>
            <th scope="col">Цена</th>
            <th scope="col">Количество</th>
            <th scope="col">Сумма</th>
          </tr>
        </thead>
        <tbody>
          {renderOrderBookInfo()}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
