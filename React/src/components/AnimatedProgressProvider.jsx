import React from "react";
import { Animate } from "react-move";

class AnimatedProgressProvider extends React.Component {
  interval = undefined;
  state = {
    isAnimated: false
  };
  

  static defaultProps = {
    valueStart: 0,
    valueEnd : 0
  };

  componentDidMount() {
    // if (this.props.repeat) {
      this.interval = window.setInterval(() => {
        this.setState({
          isAnimated: !this.state.isAnimated
        });
      }, this.props.duration * 0);
      console.log("If.. ")

    // } else {
    //   this.setState({
    //     isAnimated: !this.state.isAnimated
    //   });
    //   console.log("Else.. ")
    // }
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <Animate
        start={() => ({
          value: this.props.valueStart,
          value: this.props.valueEnd 

        })}
        update={() => ({
          value: this.props.valueEnd 
          ,
          timing: {
            duration: this.props.duration * 10,
            ease: this.props.easingFunction
          }
        })}
      >
        {({ value }) => this.props.children(value)}
      </Animate>
    );
  }
}

export default AnimatedProgressProvider;