import React from 'react';
import { shallow } from 'enzyme';
import { ContactComponent } from './Contact';

describe('Component Contact', () => {
  it('should render without crashing', () => {
    const component = shallow(<ContactComponent />);
    expect(component).toBeTruthy();
  });
});
