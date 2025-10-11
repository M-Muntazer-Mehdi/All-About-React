import React, { Component } from 'react';

class Binding extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('Button clicked!');
  }
  
  handleClick1 = () => {
    alert('Button1 clicked!');
  };

  render() {
    return(
        <div>
            <h1 style={{fontSize:"18px"}}>Binding in constructor, Click to an: <nr></nr>
                <button style={{fontSize:"18px"}} onClick={this.handleClick}>Event</button>
            </h1>
            <h1 style={{fontSize:"18px"}}>Binding using public class fields, Click to an: <nr></nr>
                <button style={{fontSize:"18px"}} onClick={this.handleClick1}>Event</button>
            </h1>
        </div>
    )
  }
}

export default Binding;
