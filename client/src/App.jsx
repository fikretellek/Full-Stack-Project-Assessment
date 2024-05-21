import React, { useState } from "react";
import VideoList from "./videoList/VideoList";

const App = () => {
	const [videos, setVideos] = useState([]);


	async function getFetch() {
		fetch("https://full-stack-project-group2.netlify.app/api/videos")
			.then((res) => res.json())
			.then((data) => setVideos(data));
	}

	useEffect(() => {
		getFetch();
	}, []);

	async function removeVideo(id){
		console.log(`deleting video ${id}`);
		const res = await fetch(`/api/videos/${id}`, {
			method: "DELETE",
		})
		if(res.status === 204){
			await getFetch();
			setVideos(videos.filter(video => video.id !== id));
		}
	}

// 	return (
// 		<>
// 			<h1>Video Recommendations</h1>
// 			<ul>
// 				{videos.map((video) => {
// 					return (
// 						<>
// 							<li key={video.id}>
// 								<a href={video.src}>{video.title}</a>
// 								<button onClick={() => removeVideo(video.id)}>Remove Video</button>
// 							</li>
// 						</>
// 					);
// 				})}
// 				{/* {videoRecommendations.map((recommendation, index) => (
//                     <li key={index}>
//                         <a href={recommendation.url} target="_blank" rel="noopener noreferrer">
//                             {recommendation.title}
//                         </a>
//                     </li>
//                 ))} */}
// 			</ul>

	return (
		<>
			<h1>Video Recommendations</h1>
			<VideoList videos={videos} setVideos={setVideos} />

		</>
	);
};

export default App;
