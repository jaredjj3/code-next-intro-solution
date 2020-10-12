import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      ...this.state,
      count: this.state.count + 1
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(`prevCount: ${prevState.count}, count: ${this.state.count}`);
  }

  componentWillUnmount() {
    console.log(``)
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <div>
          <button onClick={this.increment}>increment</button>
        </div>
      </>
    );
  }
}
