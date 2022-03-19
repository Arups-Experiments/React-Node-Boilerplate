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
    const comp = shallow(<App />);
    const temp = comp.find('.container');
    expect(temp.length).toBe(0);
  });
});
