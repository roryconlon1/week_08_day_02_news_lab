import React, { useState } from "react";

const FilterForm = ({handleFilterChange}) => {

    const [text, setText] =useState("")

    const handleTextChange = (event) => {
        setText(event.target.value);
        handleFilterChange(event.target.value)
    }

    return(
        <form>
            <input className="searchbar" type="text" onChange={handleTextChange} value={text}></input>
        </form>
    )
}

export default FilterForm;