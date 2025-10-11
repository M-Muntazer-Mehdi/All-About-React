import React, {useRef} from "react";

function UnControlledForm () {
    const name = useRef(null);
    const password = useRef(null);

    const handleclick = (event) => {
        event.preventDefault();
        alert(`Name: ${name.current.value}, Password: ${password.current.value}`);
        console.log(name, password);
    }

    return(
        <form onSubmit={handleclick}>
            <h2> UnControlled Form</h2>
            <label>
                Name:
                <input
                    type="text"
                    ref={name}
                />
            </label>
            <br />
            <label>
                Password: 
                <input
                    type="text"
                    ref={password}
                />
            </label>
            <br />
            <button type="submit">
                Submit
            </button>
        </form>
    );
}

export default UnControlledForm;