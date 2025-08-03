import React from "react";
import UsersUseEffect from './useeffectFetch';
import ReactQueryExample from './reactQuery';

function MainFile (){
    return(
        <div style={{ display: "flex", gap: "20px", padding: "20px", backgroundColor: "#f0f0f0" }}>
            
            {/* React Query Section */}
            <div style={{ flex: 1, backgroundColor: "#ddd", padding: "20px", borderRadius: "8px" }}>
                <h2>React Query Version</h2>
                <ReactQueryExample />
            </div>
            
            {/* useEffect Section */}
            <div style={{ flex: 1, backgroundColor: "#ddd", padding: "20px", borderRadius: "8px" }}>
                <h2>useEffect + Fetch Version</h2>
                <UsersUseEffect />
            </div>
        </div>
    );
}

export default MainFile;
