import React from 'react';
import classes from './App.css';
import Header from './Header/Header';
import OrdersWrapper from './OrdersWrapper/OrdersWrapper';
import OrderButton from './OrderButton/OrderButton';
import Popup from './Popup/Popup';
import { fetchOrders, fetchOrderBook } from '../api';
import { OrderInterface } from '../types';
import { handleErrors } from '../helpers';

interface AppState {
  orders: null | string | object;
  changedOrders: null | string[];
  currentOrder: null | object;
  orderBook: null | object;
  isFetching: boolean;
  isOpen: boolean;
  error: string;
}

class App extends React.Component<{}, AppState> {
  state = {
    orders: null,
    changedOrders: [],
    currentOrder: null,
    orderBook: null,
    isFetching: false,
    isOpen: false,
    error: '',
  };
  componentDidMount() {
    const orders = this.getOrdersFromStorage();
    if (orders !== null) {
      this.setState({ orders });
    }
  }
  getOrdersFromStorage = () => {
    let orders = localStorage.getItem('orders');
    if (orders !== null) {
      orders = JSON.parse(orders);
      return orders;
    }
    return null;
  }
  handleOpenPopup = (orderName: string, className: string, order: OrderInterface) => {
    this.setState({
      currentOrder: null,
      orderBook: null,
    });
    this.handleOrderBook(orderName);
    this.setState({
      isOpen: true,
      currentOrder: { [orderName]: order, className },
    });
  }
  handleClosePopup = () => {
    this.setState({
      isOpen: false,
    });
  }
  handleOrderBook = async (pair: string) => {
    const orderBook = await fetchOrderBook(pair);
    if (handleErrors(orderBook)) {
      this.setState({
        error: 'Возникли неполадки на стороне сервера:(',
      });
    }
    this.setState({ orderBook: { [pair]: orderBook[pair] } });
  }

  handleOrders = async () => {
    const ordersFromStorage = this.getOrdersFromStorage();
    this.setState({ isFetching: true });
    const orders = await fetchOrders();
    if (handleErrors(orders)) {
      this.setState({
        isFetching: false,
        error: 'Возникли неполадки на стороне сервера:(',
      });
    } else {
      localStorage.setItem('orders', JSON.stringify(orders));
      const changedOrders = ordersFromStorage ? this.compareOrders(orders as object, ordersFromStorage) : null;
      this.setState({
        orders,
        changedOrders,
        isFetching: false,
      });
    }
  }

  compareOrders = (orders: object, ordersFromStorage: string | object) => {
    const orderItems = Object.keys(orders).slice(0, 10).map(orderName => orders[orderName]);
    const orderItemsFromStorage = Object.keys(ordersFromStorage).slice(0, 10).map(orderName => orders[orderName]);
    const changedOrders = orderItems.map((orderItem, idx) => {
      const orderStatePrice = orderItem.buy_price;
      const orderStoragePrice = orderItemsFromStorage[idx].buy_price;
      if (orderStatePrice > orderStoragePrice) {
        return 'up';
      }
      if (orderStatePrice < orderStoragePrice) {
        return 'down';
      }
      return '';
    });
    return changedOrders;

  }
  render() {
    const { orders, changedOrders, currentOrder, orderBook, isFetching, isOpen, error } = this.state;
    return (
      <>
      <Header />
      <div className={classes.Container}>
        <OrdersWrapper
          orders={orders}
          changedOrders={changedOrders}
          isFetching={isFetching}
          onOpenPopup={this.handleOpenPopup}
          error={error}
        />
        <OrderButton onFetchOrders={this.handleOrders} />
      </div>
      <Popup
        onClosePopup={this.handleClosePopup}
        isOpen={isOpen}
        currentOrder={currentOrder}
        orderBook={orderBook && orderBook}
        error={error}
      />
      </>
    );
  }
}

export default App;
