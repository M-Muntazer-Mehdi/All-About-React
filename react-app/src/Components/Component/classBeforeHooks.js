import React, {Component} from "react";

class ClassComponent extends Component{
    constructor(props)
    {
        super(props);
        this.state = {name : this.props.name};
    }
    render() {
        return <h1 style={{ fontSize: "18px" }}>
        Class component before Hooks "return name: {this.state.name}"
    </h1>;
    }
}

export default ClassComponent;