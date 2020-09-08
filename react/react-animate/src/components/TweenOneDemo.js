import React from 'react';
import TweenOne from 'rc-tween-one';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';

TweenOne.plugins.push(PathPlugin);

class TweenOneDemo extends React.Component {
  constructor(props) {
    super(props);
    // this.path = `M3.5,175V19c0,0,1-8.75,8.25-11.5S26.5,8,26.5,8l54,53.25
    //   c0,0,7,8.25,14.5,0.75s51.5-52.25,51.5-52.25s9.75-7,18-2s7.75,11.5,7.75,11.5
    //   v104c0,0-0.5,15.75-15.25,15.75s-15.75-15-15.75-15V68.5c0,0-0.125-9.125-6-3.25
    //   s-36.25,36-36.25,36s-11.625,11.875-24-0.5S40.25,65.5,40.25,65.5
    //   s-5.75-5.25-5.75,2s0,107.25,0,107.25s-0.75,13.5-14.5,13.5S3.5,175,3.5,175z`;
    // this.path =
    //   'M229.856961,1.32003622 C229.56993,1.35341122 229.283096,1.38688936 228.996461,1.42047049 L228.996484,1.39657949 C229.290926,1.36218029 229.585578,1.32788881 229.880439,1.29370523 L229.856961,1.32003622 Z M69.5781847,38.1180242 C26.4122392,55.7503517 1.36555524,77.2579009 1.00396978,100.000589 L2.00384506,100.000287 C2.35698204,77.0566889 27.0191265,55.631853 69.5781847,38.1180242 Z';
    // this.path =
    //   'M363.950256,36.003519 C407.573003,36.1076149 450.088172,38.5198923 490.001142,43.073333 L490.00277,44.1729274 L491.11692,43.1779839 C491.032127,43.168241 490.947323,43.1585077 490.862506,43.1487841 L489.999824,42.1826601 L490.001108,43.0504099 C450.109104,38.5121604 407.587047,36.107253 363.950276,36.0035061 Z M356.904458,36.0067582 C313.301165,36.1507203 270.826412,38.5929309 230.995445,43.1650786 L230.996398,42.298218 L230.135034,43.264223 C230.049693,43.2740943 229.964365,43.2839754 229.87905,43.2938663 L230.99421,44.2883126 L230.995419,43.1883231 C270.847575,38.6009091 313.315434,36.1512279 356.904502,36.006783 Z';
    this.ellipse = 'M402 418a361 108 0 1 0 722 0a361 108 0 1 0 -722 0';
    this.path = 'M402 418a361rx 108ry 0角度 1(大于小于180度) 0 722 0（顺逆）';
    this.path = 'M763 527 A361 108 0 0 1 427 455';
    this.path2 = 'M427 455 A361 108 0 0 1 600 320';
    this.path3 = 'M600 320 A361 108 0 0 1 926 320';
    this.path4 = 'M926 320 A361 108 0 0 1  1089 455';
    this.path5 = 'M1089 455 A361 108 0 0 1  763 527';
    this.animation = {
      path: this.path,
      repeat: -1,
      duration: 5000,
      //   delay: 3000,
      //   repeatDelay: 3000,
      onUpdate: (e) => {
        // 每一步动画执行
        //第一次完成执行
        // console.info('-----------update-----------');
        // console.log('e', e);
      },
      //   onComplete: (e) => { //第一次完成执行
      //     console.info('-----------Complete-----------');
      //     console.log('e', e);
      //   },
      onRepeat: (e) => {
        // 每次重复后执行
        console.info('-----------repeaat-----------');
        console.log('e', e);
      },
    };
  }

  render() {
    return (
      <div
        style={{
          position: 'relative',
        }}
      >
        {/* <TweenOne
          animation={this.animation}
          style={{
            margin: 0,
            width: 20,
            height: 20,
            transform: 'translate(-10px, -10px)',
          }}
          className="code-box-shape"
          paused={this.props.paused}
          onChange={(...args) => {
            // 有所有事件的更新和moment
            //   console.log('args', args);
            //   console.info('-----------change-----------');
          }}
          resetStyle={true}
        /> */}
        <svg width="1960" height="1080" x="0">
          <path d={this.ellipse} fill="none" stroke="rgba(1, 1, 2, 1)" />
          <path d={this.path} fill="none" stroke="rgba(1, 1, 2, 1)" />
          <path d={this.path2} fill="none" stroke="rgba(1, 1, 2, 1)" />
          <path d={this.path3} fill="none" stroke="rgba(1, 1, 2, 1)" />
          <path d={this.path4} fill="none" stroke="rgba(1, 1, 2, 1)" />
          <path d={this.path5} fill="none" stroke="rgba(1, 1, 2, 1)" />
        </svg>
      </div>
    );
  }
}

export default TweenOneDemo;
