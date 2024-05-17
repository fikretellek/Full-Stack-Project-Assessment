import React, { useState } from "react";
import VideoList from "./videoList/VideoList";

const App = () => {
	const [videos, setVideos] = useState([]);

	return (
		<>
			<h1>Video Recommendations</h1>
			<VideoList videos={videos} setVideos={setVideos} />
		</>
	);
};

export default App;
