import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import counterReducer from './reducer';
import { increment, decrement } from './actionCreators';

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer);

const Counter = () => {
  const count = useSelector(state => {
    return state.counter.count;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}
