import React from 'react';
import TweenOne from 'rc-tween-one';

const stayTime = 1000;
const moveTime = 500;
const hideOpacity = 0.5;
class TweenOneTimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.animation = [
      { left: '0px', top: '140px', opacity: 1, duration: stayTime }, //  左中
      { left: '100px', top: '80px', opacity: 1, duration: moveTime }, // 左上
      { left: '100px', top: '80px', opacity: 1, duration: stayTime },
      { left: '300px', top: '80px', opacity: 1, duration: moveTime }, // 右上
      { left: '300px', top: '80px', opacity: 1, duration: stayTime },
      { left: '400px', top: '140px', opacity: 1, duration: moveTime }, // 右中
      { left: '400px', top: '140px', opacity: 1, duration: stayTime },
      { left: '200px', top: '400px', opacity: hideOpacity, duration: moveTime }, // 下中
      { left: '200px', top: '400px', opacity: hideOpacity, duration: stayTime },
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
        <TweenOne
          animation={this.detailAnimation}
          repeat={-1} // demo 演示需要，时间轴循环
          className="detail-box"
          style={{ opacity: hideOpacity }}
        />
      </div>
    );
  }
}

export default TweenOneTimeLine;
