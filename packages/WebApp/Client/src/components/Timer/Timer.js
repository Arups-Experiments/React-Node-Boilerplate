import React, { useRef } from 'react';

export default function Timer() {
  const timerRef = React.useRef(0);
  const [timer, dispatcher] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case 'start':
          {
            if (timerRef.current) clearInterval(timerRef.current);

            timerRef.current = setInterval(() => {
              dispatcher({ type: 'update' });
            }, 1000);
            return { ...state };
          }
          break;
        case 'stop':
          {
            debugger;
            clearInterval(timerRef.current);
            timerRef.current = 0;
            return { ...state };
          }
          break;
        case 'update':
          {
            return {
              ...state,
              time: new Date(),
            };
          }
          break;
      }
    },
    {
      time: new Date(),
    }
  );

  return (
    <React.Fragment>
      <div>Timer {timer.time.toLocaleTimeString()}</div>
      <div>
        <button onClick={() => dispatcher({ type: 'start' })}>start</button>
        <button onClick={() => dispatcher({ type: 'stop' })}>stop</button>
      </div>
    </React.Fragment>
  );
}
