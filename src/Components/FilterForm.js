import React, { useState } from "react";

const FilterForm = ({handleFilterChange}) => {

    const [text, setText] =useState("")

    const handleTextChange = (event) => {
        setText(event.target.value);
        handleFilterChange(event.target.value)
    }

    return(
        <form>
            <input type="text" onChange={handleTextChange} value={text}></input>
            <button >Search</button>
        </form>
    )
}

export default FilterForm;