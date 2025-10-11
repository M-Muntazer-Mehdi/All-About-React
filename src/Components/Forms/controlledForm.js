import React, {useState} from "react";

function ControlledForm () {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleclick = (event) => {
        event.preventDefault();
        alert(`Name: ${name}, Password: ${password}`);
        console.log(name, password);
    }

    return(
        <form onSubmit={handleclick}>
            <h2> Controlled Form</h2>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password: 
                <input
                    type="text"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">
                Submit
            </button>
        </form>
    );
}

export default ControlledForm;