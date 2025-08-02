import React from "react";
import { observer } from "mobx-react-lite";
import { store } from "./store";

const MobXComponent = observer(() => {
    return (
        <div>
            <h1>MobX Counter</h1>
            <p>Value: {store.value}</p>
            <button onClick={() => store.increment()}>Increment</button>
            <button onClick={() => store.decrement()}>Decrement</button>
        </div>
    );
});

export default MobXComponent;