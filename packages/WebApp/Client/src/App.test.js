import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Users from '../src/components/UserListComponent';
import Dogs from '../src/components/DogListComponent';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});

import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new Adapter(),
  disableLifecycleMethods: true,
});

describe('Testing App Component', function () {
  test('App Component', function () {
    const wrapper = shallow(
      <Provider store={store}>
        <Users />
        <Dogs />
      </Provider>
    );
    const temp = wrapper.find('.users').children();
    expect(temp.length).toBe(0);
  });
});
