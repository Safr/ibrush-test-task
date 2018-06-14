import React from 'react';
import { shallow } from 'enzyme';
import Spinner from '../../components/Spinner/Spinner';

describe('Spinner Component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper).toMatchSnapshot();
  });
});
