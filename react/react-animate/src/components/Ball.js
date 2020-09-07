import React, { useState, useEffect, Fragment } from 'react';

const Component = () => {
  const [stage, setStage] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
      console.info('----------------------');
    }, 6000);
  }, []);

  return (
    <Fragment>
      <button
        onClick={() => {
          setStage(stage + 1);
        }}
      >
        test
      </button>
      <div className={['ball ball1', flag ? 'ball1Style ball' : null].join(' ')}>
        ball1
      </div>
      <div className={`ball ball2`}>ball2</div>
    </Fragment>
  );
};
export default Component;
