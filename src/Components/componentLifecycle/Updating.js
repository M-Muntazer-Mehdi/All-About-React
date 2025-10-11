import React, {Component} from "react";

class Updating extends Component {
    constructor(props)
    {
        super(props);
        this.state = {count: 0};
        this.scrollRef = React.createRef();
        console.log("Constructor: Component Initialized");
    }

    static getDrivedStateFromProps(props, state)
    {
        console.log("getDrivedStateFromProps: sync state with prop");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        console.log("shouldComponentUpdate: determine component re-render on not");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        if (this.scrollRef.current) {
            const scrollPosition = this.scrollRef.current.scrollTop;
            console.log("getSnapshotBeforeUpdate: Capture the scroll position before update: ", scrollPosition);
            return scrollPosition;
          }
          console.log("not capture");
          return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        console.log("componentDidUpdate: component updated");
        if(snapshot !== null)
        {
            this.scrollRef.current.scrollTop = snapshot;
            console.log("Restoring Scroll Position to: ", snapshot);
        }
    }

    render() {
        console.log('Render: Re-rendering');

    return (
        <div>
         <h1 style={{ fontSize: "18px" }}> Click to increase the Updating example count: {this.state.count} <nr></nr>
            <button style={{ fontSize: "18px" }} onClick={()=> this.setState({count : this.state.count + 1})}> 
                Click me
            </button>
        </h1>
        <div ref={this.scrollRef} style={{ height: '100px', overflowY: 'scroll', border: '1px solid black' }}>
          <div style={{ height: '300px', padding: '10px' }}>
            <p>Scrollable Content</p>
            <p>More content here...</p>
            <p>Keep scrolling...</p>
            <p>Count: {this.state.count}</p>
            <p>Keep incrementing the count!</p>
            <p>More content here...</p>
            <p>Keep scrolling...</p>
            <p>Count: {this.state.count}</p>
            <p>Keep incrementing the count!</p>
            {/* Additional content can be added here */}
          </div>
        </div>
      </div>
    );
  }
}

export default Updating;