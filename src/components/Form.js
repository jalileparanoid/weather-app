import React, { useEffect, useRef, useState } from "react";
import SearchFilter from "./SearchFilter";

function Form({ error, submitRequest }) {
    const [location, setLocation] = useState("");
    const [isSearch, setIsSearch] = useState(false);

    const filterRef = useRef(null);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (!location || location === "") return;
        submitRequest(location)
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setIsSearch(false);
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [isSearch]);

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="search" ref={filterRef}>
                    <input
                        type="text"
                        placeholder="City"
                        value={location}
                        onChange={(e) => {
                            setLocation(e.target.value)
                        }}
                        onFocus={() => {
                            setIsSearch(true)
                        }}
                    />
                    {isSearch ? <SearchFilter location={location} setLocation={setLocation} setIsSearch={setIsSearch} /> : null}
                </div>
                <button type="submit">SEARCH</button>
                <div className="error">{error}</div>
            </form>
        </div>
    );
}

export default Form;
