import React from 'react';
import { shallow } from 'enzyme';
import { CartBoxComponent } from './CartBox';

describe('Component CartBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartBoxComponent />);
    expect(component).toBeTruthy();
  });
});
