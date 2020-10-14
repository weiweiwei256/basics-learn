import React from 'react';
import TweenOne from 'rc-tween-one';

const stayTime = 500;
const moveTime = 500;
const hideOpacity = 0.5;
const jumpTime = stayTime / 8;
const jumpHeight = 75;
const jump = [
  {
    y: -0.1 * jumpHeight,
    duration: jumpTime,
    onStart: function () {
      debugger;
      console.info(`-----------start-----------`);
      console.log('this', this);
    },
    onRepeat: () => {
      console.info(`-----------repeat-----------`);
    },
    onUpdate: ({ radio, index }) => {
      console.info(`radio${radio}--index:${index}---------update-----------`);
    },
  },
  { y: 0.1 * jumpHeight, duration: jumpTime },
  { y: -0.1 * jumpHeight, duration: jumpTime },
  { y: 0.1 * jumpHeight, duration: jumpTime },
  { y: -0.1 * jumpHeight, duration: jumpTime },
  { y: 0.1 * jumpHeight, duration: jumpTime },
  { y: -0.1 * jumpHeight, duration: jumpTime },
  {
    y: 0.1 * jumpHeight,
    duration: jumpTime,
    onComplete: () => {
      console.error(`-----------end-----------`);
    },
  },
];
class TweenOneTimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.animation = [
      ...jump,
      // { left: '0px', top: '140px', opacity: 1, duration: stayTime }, //  左中
      { left: '100px', top: '80px', opacity: 1, duration: moveTime }, // 左上
      ...jump,
      // { left: '100px', top: '80px', opacity: 1, duration: stayTime },
      { left: '300px', top: '80px', opacity: 1, duration: moveTime }, // 右上
      ...jump,
      // { left: '300px', top: '80px', opacity: 1, duration: stayTime },
      { left: '400px', top: '140px', opacity: 1, duration: moveTime }, // 右中
      ...jump,
      // { left: '400px', top: '140px', opacity: 1, duration: stayTime },
      { left: '200px', top: '400px', opacity: hideOpacity, duration: moveTime }, // 下中
      ...jump,
      // { left: '200px', top: '400px', opacity: hideOpacity, duration: stayTime },
      { left: '0px', top: '140px', opacity: 1, duration: moveTime }, // 原始的点
    ];
    this.detailAnimation = [
      { left: '400px', top: '140px', opacity: hideOpacity, duration: stayTime },

      {
        left: '200px',
        top: '400px',
        opacity: 1,
        duration: moveTime,
        width: '200px',
        height: '100px',
        // translate: '-50%, -50%',
      }, // 下中
      {
        left: '200px',
        top: '400px',
        opacity: 1,
        duration: stayTime,
        width: '200px',
        height: '100px',
        // translate: '-50%, -50%',
      },
      { left: '0px', top: '140px', opacity: hideOpacity, duration: moveTime }, // 原始的点
      { left: '0px', top: '140px', opacity: hideOpacity, duration: stayTime }, // 原始的点
      {
        left: '0px',
        top: '140px',
        opacity: hideOpacity,
        duration: stayTime * 2 + moveTime * 3,
      }, // 原始的点
    ];
  }

  render() {
    return (
      <div
        style={{
          position: 'relative',
          height: 1000,
          width: 1000,
          margin: '10px auto',
        }}
      >
        <TweenOne
          animation={this.animation}
          moment={stayTime * 3 + moveTime * 3}
          repeat={-1} // demo 演示需要，时间轴循环
          className="code-box-shape2"
        />
        {/* <TweenOne
          animation={this.detailAnimation}
          repeat={-1} // demo 演示需要，时间轴循环
          className="detail-box"
          style={{ opacity: hideOpacity }}
        /> */}
      </div>
    );
  }
}

export default TweenOneTimeLine;
