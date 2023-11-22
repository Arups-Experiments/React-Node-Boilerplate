import React from 'react';

function useStopWatchSetUp() {
  const [time, setTime] = React.useState(new Date());
  const timerIdRef = React.useRef(0);

  React.useEffect(() => {
    timerIdRef.current = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(timerIdRef.current);
      timerIdRef.current = 0;
    };
  }, []);

  return { time, setTime };
}

export default useStopWatchSetUp;
