import React, { Fragment } from 'react';
import Fade from './Fade';
import Small from './small';
import Big from './big';

let num = 1;
const style = {
  position: 'absolute',
  top: 0,
};
class Demo extends React.Component {
  state = {
    fadeStatus: true,
    flag: false,
    dom: <Small />,
  };
  handle = (bool) => {
    this.setState({
      flag: !this.state.flag,
      fadeStatus: !bool,
    });
  };
  end = () => {
    num = num + 1;
    console.log('this.state.flag', this.state.flag);
    setTimeout(() => {
      this.setState({
        fadeStatus: true,
        dom: this.state.flag ? <Big /> : <Small />,
      });
    }, 500);
  };
  render() {
    return (
      <Fragment>
        <button onClick={this.handle.bind(null, this.state.fadeStatus)}>
          点击transition
        </button>
        <Fade in={this.state.fadeStatus} style={style}>
          <Big />
        </Fade>
        <Fade in={!this.state.fadeStatus} style={style}>
          <Small />
        </Fade>
      </Fragment>
    );
  }
}
// 效果是每次点击按钮都会进行一次进场和出场的动画。也可以自行衍生。
export default Demo;
