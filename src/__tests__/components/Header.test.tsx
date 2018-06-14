import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header/Header';

describe('Header Component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(
      <Header />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
