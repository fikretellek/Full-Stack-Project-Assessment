import React, { useState } from "react";
import VideoList from "./videoList/VideoList";
import AddVideoForm from "./AddVideoForm";

const App = () => {
    const [videos, setVideos] = useState([]);

    const fetchVideos = async () => {
        try {
            const response = await fetch("/api/videos");
            const data = await response.json();
            setVideos(data);
        } catch (error) {
            console.error("Error fetching videos:", error);
        }
    };

    // Fetch videos on initial render
    React.useEffect(() => {
        fetchVideos();
    }, []);

    return (
        <>
            <h1>Video Recommendations</h1>
            <AddVideoForm setVideos={setVideos} />
            <VideoList videos={videos} setVideos={setVideos} />
        </>
    );
};

export default App;
