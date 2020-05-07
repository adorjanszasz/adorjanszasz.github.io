import React, { Component } from "react";
import Typical from "react-typical";

class HeaderText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loops: 1,
      words: props.data || [],
    };
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
      <Typical
        steps={this.state.words}
        loop={this.state.loops}
        wrapper="h1"
      ></Typical>
    );
  }
}

export default HeaderText;
