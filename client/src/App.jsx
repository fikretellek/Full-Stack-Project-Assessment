import React, { useState } from "react";
import VideoList from "./videoList/VideoList";
import AddVideoForm from "./AddVideoForm";

const App = () => {
    const [videos, setVideos] = useState([]);

    return (
        <>
            <h1>Video Recommendations</h1>
            <AddVideoForm setVideos={setVideos} />
            <VideoList videos={videos} setVideos={setVideos} />
        </>
    );
}
export default App;
