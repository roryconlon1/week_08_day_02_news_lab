import React, { useEffect, useState } from "react";
import FilterForm from "../Components/FilterForm";
import StoriesList from "../Components/StoriesList";
import StoriesListItem from "../Components/StoriesListItem";

const HackerNewsContainer = () => {

    const [latestStoriesID, setLatestStoriesID] = useState([])
    const [storyDetails, setStoryDetails] = useState([])
    const [filterStory, setFilterStory] = useState([])

    useEffect(() => {

        fetch("https://hacker-news.firebaseio.com/v0/topstories.json ")
        .then(res => res.json())
        .then(data => setLatestStoriesID(data.slice(0,20)))
        
    }, [])

    useEffect(() => {
        showStory()
    }, [latestStoriesID])

    const showStory = () => {
        const getStory = latestStoriesID.map((storyId) => {
            return fetch ('https://hacker-news.firebaseio.com/v0/item/' + storyId + '.json')
            .then(res => res.json())
        })
        Promise.all(getStory)
        .then((data) => {
            setStoryDetails(data)
            setFilterStory(data)
        })
    }

    const filteringStories = (text) => {
        const searchByName = storyDetails.filter((story) => {
            const lowercase = text.toLowerCase()
            return story.title.toLowerCase().includes(lowercase)
        })
            setFilterStory(searchByName)
    }


        
    


    // const handleButtonClick = () => {
    //     const filteredData = storyDetails.filter()
    // }




    return(
        <div>
            <h1>
                Container:
            </h1>
            <FilterForm handleFilterChange={filteringStories}/>
            <StoriesList storyDetails={filterStory}/>
        </div>
    )
}

export default HackerNewsContainer;