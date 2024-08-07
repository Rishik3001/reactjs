import React, { useState } from 'react';

const SearchBar = ({ setQuery }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch = () => {
        setQuery(inputValue); 
        console.log("Search Query:", inputValue);
    };

    return (
        <>
            <div className="search-bar mt-3">
                <div className="col">
                    <input
                        className="p-3"
                        type="search"
                        placeholder="Search influencers by interests, topics, or keywords..."
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button className="bttn p-2 ms-2" onClick={handleSearch}>Search</button>
                    <button className="bttn p-2 ms-2" type="button">Filter</button>
                    <button className="bttn p-2 ms-2" type="button">Load More</button>
                </div>
            </div>
                <div className="alert alert-info search-bar-alert" role="alert">
                    Serach bar works only for fitness,tech & vegan
                </div>
        </>
    );
};

export default SearchBar;
