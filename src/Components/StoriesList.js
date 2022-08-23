import React from "react";
import StoriesListItem from "./StoriesListItem";

const StoriesList = ({ storyDetails ,showStory}) => {

    const handleStory = storyDetails.map((story, index) => {
        return <StoriesListItem key={index} story={story}/>
    })
        

    
    return(
        <div className="list">
            <h3>Items:</h3>
            <ul>
                {handleStory}
            </ul>
        </div>
    )
}

export default StoriesList;