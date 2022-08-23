import React from "react";

const StoriesListItem = ({story}) => {

    // const storyTitle = () => {
    //     return <p>{story.title}</p>
    // }

    return(
        <div className="list-individual">
            <li className="list-thing">
                {story.title}.<a className="link" href={story.url}>Click here to view Story</a>
            </li>
        </div>
    )
}

export default StoriesListItem;