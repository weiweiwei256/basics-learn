import React from 'react';
import TweenOne from 'rc-tween-one';
import SvgDrawPlugin from 'rc-tween-one/lib/plugin/SvgDrawPlugin';
import PropTypes from 'prop-types';
TweenOne.plugins.push(SvgDrawPlugin);

const dataStartArr = [0, '100%'];
let i = 0;
class TweenOneSVGLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweenData: '100%',
    };
  }

  onClick() {
    const tweenData = dataStartArr[i];
    this.setState({
      tweenData,
    });
    i++;
    i = i >= dataStartArr.length ? 0 : i;
  }

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <button type="primary" onClick={this.onClick.bind(this)}>
          Switch
        </button>
        <svg
          width="800"
          height="484"
          version="1.2"
          style={{ display: 'block', margin: 'auto' }}
        >
          <TweenOne
            animation={{ SVGDraw: this.state.tweenData, duration: 1000 }}
            style={{ fill: 'none', strokeWidth: 10, stroke: '#019BF0' }}
            component="path"
            d="M10,10a30 50 0 0 1 162.55 162.45"
          />
        </svg>
        <p>Current Param: {this.state.tweenData}</p>
      </div>
    );
  }
}
export default TweenOneSVGLine;
