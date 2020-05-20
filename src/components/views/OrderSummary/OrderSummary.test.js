import React from 'react';
import { shallow } from 'enzyme';
import { OrderSummaryComponent } from './OrderSummary';

describe('Component OrderSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderSummaryComponent />);
    expect(component).toBeTruthy();
  });
});
