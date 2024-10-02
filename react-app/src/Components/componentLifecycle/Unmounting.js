import React from 'react';

class Unmounting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isRunning: true,
    };
    console.log('Constructor: Component Initialized');
  }

  componentDidMount() {
    console.log('ComponentDidMount: Component Mounted to the DOM');
    this.timerID = setInterval(() => {
      if (this.state.isRunning) {
        this.setState({ count: this.state.count + 1 });
      }
    }, 1000);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Cleaning up before component unmounts');
    clearInterval(this.timerID);
  }

  stopCounter = () => {
    this.setState({ isRunning: false }); 
    console.log('Counter stopped');
  };

  render() {
    console.log('Render: Component Rendering');
    return (
      <div>
       <h1 style={{ fontSize: "18px" }}> Click to stop the Unmounting example count: {this.state.count} <nr></nr>
        <button style={{ fontSize: "18px" }} onClick={this.stopCounter}>Stop Counter</button>
        </h1>
      </div>
    );
  }
}

export default Unmounting;
