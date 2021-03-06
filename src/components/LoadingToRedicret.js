import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './loader.css';

const LoadingToRedicret = () => {
  const [count, setCount] = useState(5);
  const history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);

    count === 0 && history.push('/login');
    return () => clearInterval(interval);
  }, [count, history]);
  return (
    <div>
      <div className='loader-wrapper'>
        <div className='loader'></div>
      </div>
    </div>
  );
};

export default LoadingToRedicret;
