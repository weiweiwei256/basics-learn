import React from 'react';
import TweenOne from 'rc-tween-one';
import PathPlugin from 'rc-tween-one/lib/plugin/PathPlugin';
TweenOne.plugins.push(PathPlugin);
const p0 = 'M0,100 L25,100 C34,20 40,0 100,0';


const ease0 = TweenOne.easing.path(p0);

class TweenOneStar extends React.Component {
  constructor(props) {
    super(props);
    this.path = `M3.5,175V19c0,0,1-8.75,8.25-11.5S26.5,8,26.5,8l54,53.25
    c0,0,7,8.25,14.5,0.75s51.5-52.25,51.5-52.25s9.75-7,18-2s7.75,11.5,7.75,11.5
    v104c0,0-0.5,15.75-15.25,15.75s-15.75-15-15.75-15V68.5c0,0-0.125-9.125-6-3.25
    s-36.25,36-36.25,36s-11.625,11.875-24-0.5S40.25,65.5,40.25,65.5
    s-5.75-5.25-5.75,2s0,107.25,0,107.25s-0.75,13.5-14.5,13.5S3.5,175,3.5,175z`;
    this.animation = [
      {
        y: -70,
        // repeat: -1,
        ease: ease0,
        duration: 1000,
      },
      {
        x: -140,
        backgroundColor: 'black',
        duration: 1000,
      },
      {
        backgroundColor: 'red',
        // repeat: -1,
        ease: 'linear',
        path: this.path,
        duration: 8000,
      },
    ];
  }

  render() {
    return (
      <div>
        <TweenOne
          animation={this.animation}
          paused={this.props.paused}
          repeat={-1}
          className="code-box-shape"
          style={{
            // position: 'absolute',
            // transformOrigin: 'center bottom',
          }}
        />
      </div>
    );
  }
}
export default TweenOneStar;
