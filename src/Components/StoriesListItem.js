import React from "react";

const StoriesListItem = ({story}) => {

    // const storyTitle = () => {
    //     return <p>{story.title}</p>
    // }

    return(
        <div className="list">
            <li>
                {story.title}
            </li>
        </div>
    )
}

export default StoriesListItem;