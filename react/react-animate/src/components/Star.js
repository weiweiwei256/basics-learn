import React, { useState, useEffect, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';

const Component = () => {
  const [flag, setFlag] = useState(true);
  const [cmp, setCmp] = useState('star');
  useEffect(() => {
    setTimeout(() => {
      setCmp('star2');
    }, 3000);
    setTimeout(() => {
      setCmp('star');
      console.info('----------------------');
    }, 6000);
  }, []);
  const handleStar = () => {
    // setFlag(!flag);
    // setTimeout(() => {
    setCmp('star2');
    // setFlag(!flag);
    // }, 2000);
  };
  return (
    <Fragment>
      <button
        onClick={() => {
          handleStar();
        }}
      >
        start
      </button>
      {/* <CSSTransition in={flag} timeout={3000} classNames={'star'} unmountOnExit> */}
      <div className={cmp}>
        <div className="ball"></div>
      </div>
      <div className={cmp}>
        <div className="ball2"></div>
      </div>
      {/* </CSSTransition> */}
    </Fragment>
  );
};
export default Component;
