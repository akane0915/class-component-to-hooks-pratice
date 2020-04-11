import React from 'react';
import { shallow } from 'enzyme';

import One from './Four';

let one;

beforeEach(() => {
  one = shallow(<One />);
});

it('renders without crashing', () => {
  expect(one.contains('Count is')).toEqual(true);
});

it('renders the count', () => {
});