import React, {Component} from "react";

class ClassAfterHooks extends Component{
    constructor(props)
    {
        super(props);
        this.state = {count: 0}
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1});
    }
    render() {
        return  <div>        
                    <h1 style={{ fontSize: "18px" }}>
                        Class component After Hooks, Click {this.state.count} times    <nr></nr> <nr></nr>
                        <button onClick={this.handleIncrement} style={{ fontSize: "18px" }}>
                            click me
                        </button>
                    </h1>
                </div>
        ;
    }
}

export default ClassAfterHooks