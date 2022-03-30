import React, { useState } from "react";

function Form({ error, submitRequest }) {

    const [location, setLocation] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (!location || location === "") return;
        submitRequest(location)
    };

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    placeholder="City"
                    value={location}
                    onChange={(e) => {
                        setLocation(e.target.value)
                    }}
                />
                <button type="submit">SEARCH</button>
                <div className="error">{error}</div>
            </form>
        </div>
    );
}

export default Form;
