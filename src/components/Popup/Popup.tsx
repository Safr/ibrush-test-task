import React from 'react';
import Transition from 'react-transition-group/Transition';
import OrderTable from '../OrderTable/OrderTable';
import Spinner from '../Spinner/Spinner';
import { OrderBookInfo } from '../../types';
import classes from './Popup.css';

const duration = 500;
const defaultStyle = {
  top: 0,
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0, top: 0 },
  entered:  { opacity: 1, top: '50%' },
  exiting: { opacity: 1, top: '50%' },
  exited:  { opacity: 0, top: -100 },
};

interface Props {
  currentOrder: any | object;
  orderBook: null |object;
  onClosePopup: () => void;
  isOpen: boolean;
  error: string;
}

class Popup extends React.PureComponent<Props> {
  render() {
    const { isOpen, onClosePopup, currentOrder, orderBook, error } = this.props;
    const orderName = currentOrder ? Object.keys(currentOrder)[0] : '';
    let orderBookBuy: OrderBookInfo[];
    let orderBookSell: OrderBookInfo[];
    if (orderBook !== null) {
      orderBookBuy = orderBook[orderName].ask;
      orderBookSell = orderBook[orderName].bid;
    }
    const renderOrderInfo = () => {
      const orderInfo = currentOrder[orderName];
      return (
        <div className={classes.orderInfo}>
          <header>
          <h1>{orderName}
            <span
              className={`${classes.BuyPrice} ${classes[`${currentOrder.className}`]}`}
            >
             {orderInfo.buy_price.replace('.', ',')}
            </span>
          </h1>
          <p>Статистика за 24 часа:</p>
          </header>
          <div className={classes.orderVolumes}>
            <div className={classes.orderVolumesLeft}>
              <p>Объем торгов: <span>{orderInfo.vol}</span></p>
              <p>Объем сделок: <span>{orderInfo.vol_curr}</span></p>
            </div>
            <div className={classes.orderVolumesRight}>
              <p>Средняя цена сделки: <span>{orderInfo.avg}</span></p>
              <p>Максимальная цена сделки: <span>{orderInfo.high}</span></p>
              <p>Минимальная цена сделки: <span>{orderInfo.low}</span></p>
            </div>
          </div>
          {
            !orderBook ?
            <div className={classes.SpinnerCenter}>
              <p>Ждем получения ордеров по валютной паре</p>
              <Spinner />
            </div>
            :
            <div className={classes.TableContainer}>
              <div className={classes.TableItem}>
                <h2>Покупка</h2>
                <OrderTable orderBook={orderBookBuy} />
              </div>
              <div className={classes.TableItem}>
                <h2>Продажа</h2>
                <OrderTable orderBook={orderBookSell} />
              </div>
            </div>}
            {error && <p className={classes.Error}>{error}</p>}
        </div>
      );
    };
    return (
      <Transition in={isOpen} timeout={duration}>
        {(state: string) => (
          <div style={{ ...defaultStyle, ...transitionStyles[state] }} className={`${classes.Popup} ${state}`}>
            {currentOrder && renderOrderInfo()}
            <a onClick={onClosePopup}>&#10005;</a>
          </div>
        )}
    </Transition>
    );
  }
}

export default Popup;
