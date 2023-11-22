import React from 'react';
import './stopwatch.css';
import useStopWatchSetUp from './useStopWatch';

const StopWatch = () => {
  const { time } = useStopWatchSetUp();

  return (
    <div className="timer-div">
      Current time is: {time.toLocaleTimeString()}
    </div>
  );
};

export default StopWatch;
