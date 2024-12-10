import React, { Component } from 'react'

class ReactClass extends Component {
    state = {isVisisble: true};

    toggleVisibility = () => this.setState({isVisisble: !this.state.isVisisble});
    state = {count : 0}

    increment = () => this.setState({count: this.state.count + 1})

    componentDidMount(){
        console.log("Component mounted");
    }
    componentDidUpdate(){
        console.log("Component updated");
    }
  render() {
    const {name,age,email} =this.props;

    return (
      <div>
        <button onClick={this.toggleVisibility}>Toggle Text</button>
        {this.state.isVisisble && <p>Here is some text!</p>}
        <h1>{name}</h1>
        <p>Age : {age}</p>
        <p>Email: {email}</p>
        <h1>{new Date().toLocaleString()}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <h1>React Lifecycle</h1>
      </div>
    )
  }
}

export default ReactClass
