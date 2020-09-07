import React, { Fragment, useEffect } from 'react';

const style = {
  width: '50px',
  height: '50px',
  backgroundColor: 'blue',
  transition: 'translate(500px,100px) 0.5s ',
  animation: 'myfirst 2s linear',
};

const Test = () => {
  useEffect(() => {
    console.log('demo dom', document.getElementById('demo'));
    document.getElementById('demo').addEventListener('animationend', () => {
      console.info('-----------animate callback-----------');
    });
    setInterval(function move() {
      document.getElementById('demo').style.animation = '';
      setTimeout(function () {
        console.info('-----------update animate-----------');
        document.getElementById('demo').style.animation = 'myfirst 2s linear ';
      }, 0.000000000000000000001);
    }, 2000);
  }, []);
  return (
    <Fragment>
      <button onClick={() => {}}>test</button>
      <div style={style} id="demo">
        demo
      </div>
    </Fragment>
  );
};
// 效果是每次点击按钮都会进行一次进场和出场的动画。也可以自行衍生。
export default Test;
