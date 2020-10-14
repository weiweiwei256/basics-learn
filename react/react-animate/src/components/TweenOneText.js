import React from 'react';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';

class TweenOneText extends React.Component {
  state = {
    show: true,
    mode: 'sync',
    type: 'scaleY',
    index: 0,
    data: ['这是一段测试的话1', '这是一段测试的话2', '这是一段测试的话3'],
  };

  onClick = () => {
    // this.setState({
    //   show: !this.state.show
    // });
    setInterval(() => {
      this.setState({
        show: false,
      });
      setTimeout(() => {
        this.setState({
          show: true,
          index:
            this.state.index + 1 >= this.state.data.length
              ? 0
              : this.state.index + 1,
        });
      }, 500);
    }, 5 * 1000);
  };
  onChange = (type) => {
    this.setState({
      type,
    });
  };

  render() {
    return (
      <div className="texty-demo" style={{ marginTop: 16 }}>
        <p className="buttons" style={{ marginBottom: 16 }}>
          <button type="primary" onClick={this.onClick}>
            Switch
          </button>
        </p>
        <Texty type={this.state.type} mode={this.state.mode}>
          {this.state.show && this.state.data[this.state.index]}
        </Texty>
      </div>
    );
  }
}
export default TweenOneText;
