import React, { Fragment } from 'react';
import { Transition } from 'react-transition-group';
//自己简单的封装了一个，该有的参数都由了，可以自行粘贴在自己的代码里面去试试。
class Fade extends React.Component {
  constructor(props) {
    super(props);
  }
  done = (...arg) => {};
  addaddEndListener = (node, ...arg) => {
    //原生时间transition运动的事件
    node.addEventListener('transitionend', this.done, false);
  };

  // 三个进入状态的事件，可以做你想做的事情
  onEnter = (node, isAppearing) => {
    console.log(isAppearing, 'onEnter');
  };
  onEntering = (node, isAppearing) => {
    console.log(isAppearing, 'onEntering');
  };
  onEntered = (node, isAppearing) => {
    // node dom
    console.log(isAppearing, 'onEntered');
  };

  // 三个退出的状态的事件
  onExit = (node) => {
    console.log('onExit');
  };
  onExiting = () => {
    console.log('onExiting');
  };
  onExited = () => {
    console.log('onExited');
    // this.props.self();
  };
  render() {
    const { in: inProp, dur } = this.props;
    const defaultStyle = {
      transition: `all ${2000}ms ease-in-out`,
      opacity: '0',
      position: 'absolute',
      top: '100px',
    };

    const transitionStyles = {
      entering: {
        transform: 'translateX(800px)',
        opacity: '0',
        width: '50px',
        height: '30px',
        backgroundColor: 'red',
      },
      entered: {
        transform: 'translateX(0px)',
        opacity: '1',
        width: '500px',
        height: '300px',
        backgroundColor: 'black',
      },
      exiting: {
        transform: 'translateX(0px)',
        opacity: '1',
        width: '500px',
        height: '300px',
        backgroundColor: 'yellow',
      },
      exited: {
        transform: 'translateX(800px)',
        opacity: '0',
        width: '50px',
        height: '30px',
        backgroundColor: 'green',
      },
    };
    const duration = {
      enter: 0,
      exit: 0,
    };
    // 上面的都是基本参数，样式的转变以及时间的设定，具体的可以看官网文档
    // 样式也可以写成className 例如<MyComponent className={`fade fade-${status}`} />
    return (
      <Transition
        onEnter={this.onEnter}
        onEntering={this.onEntering}
        onEntered={this.onEntered}
        onExit={this.onExit}
        onExiting={this.onExiting}
        onExited={this.onExited}
        addEndListener={this.addaddEndListener}
        in={inProp}
        unmountOnExit={false} // 为true 代表退出的时候移除dom
        appear={false} // 为true  渲染的时候就直接执行动画，默认false，
        timeout={duration}
      >
        {(state) => {
          // console.log(state, '###'); //你可以很直观的看到组件加载和卸载时候的状态
          return (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              {this.props.children}
            </div>
          );
        }}
      </Transition>
    );
  }
}
export default Fade;
