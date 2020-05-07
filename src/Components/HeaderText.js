import React, { Component } from "react";
import { AnimateOnChange } from "react-animation";

class HeaderText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      words: props.data || [],
    };
  }

  tick() {
    if (this.state.current === this.props.data.length - 1) {
      // stop there
    } else {
      this.setState((state) => ({
        current: state.current + 1,
      }));
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 3000);
  }

  componentDidUpdate() {
    if (this.state.words.length === 0)
      this.setState((state, props) => ({
        words: props.data,
      }));
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>
          <AnimateOnChange
            animationIn="bounceIn"
            animationOut="bounceOut"
            durationOut={3000}
          >
            <div className="container">
              <div className="text-width-wrapper">
                <div>{this.state.words[this.state.current]}</div>
              </div>
            </div>
          </AnimateOnChange>
        </h1>
      </div>
    );
  }
}

export default HeaderText;
