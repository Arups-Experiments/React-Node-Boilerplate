import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
});

describe('Testing App Component', function () {
  test('App Component', function () {
    const wrapper = shallow(<App />);
    const temp = wrapper.find('.users').children();
    expect(temp.length).toBe(1);
  });
});
