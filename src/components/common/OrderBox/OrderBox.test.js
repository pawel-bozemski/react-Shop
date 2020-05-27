import React from 'react';
import { shallow } from 'enzyme';
import { OrderBoxComponent } from './OrderBox';

describe('Component OrderBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderBoxComponent />);
    expect(component).toBeTruthy();
  });
});
