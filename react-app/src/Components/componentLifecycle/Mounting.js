import React, {Component} from "react";

class Mounting extends Component {
    constructor(props)
    {
        super(props);
        this.state = {count : 0};
        console.log("Constructor: Component Initialized");
    }

    static getDrivedStateFromProps() {
        console.log("getDrivedStateFromProps: sync prop with state");
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount: Component Mounted");
    }

    render(){
        console.log("Render: Componenet Render");
        return(
            <div>
                <h1 style={{ fontSize: "18px" }}> Click to increase the Mounting example count: {this.state.count} <nr></nr>
                    <button style={{ fontSize: "18px" }} onClick={()=> this.setState({count : this.state.count + 1})}> 
                        Click me
                    </button>
                </h1>
            </div>
        );
    }

}

export default Mounting;