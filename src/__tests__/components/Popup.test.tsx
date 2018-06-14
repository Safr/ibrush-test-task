import React from 'react';
import { shallow } from 'enzyme';
import Popup from '../../components/Popup/Popup';
import { currentOrder, orderBook } from '../../__mocks__';

describe('Popup Component', () => {
  let wrapper;
  let onClosePopup;
  beforeEach(() => {
    onClosePopup = jest.fn();
    wrapper = shallow(
      <Popup
        currentOrder={currentOrder}
        orderBook={orderBook}
        onClosePopup={onClosePopup}
        isOpen={false}
        error=""
      />,
    );
  });
  test('should render correctly with props', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
