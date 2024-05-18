import { useEffect } from "react";
import "./VideoList.css";

const VideoList = ({ videos, setVideos }) => {
	async function getFetch() {
		fetch("https://full-stack-project-group2.netlify.app/api/videos")
			.then((res) => res.json())
			.then((data) => setVideos(data));
	}

	useEffect(() => {
		getFetch();
	}, []);

	return (
		<section id="videos-container">
			<ul className="video-list">
				{videos.map((video, index) => {
					return (
						<li key={index} className="video-card">
							<a className="video-link" href={video.src}>
								{video.title.toLowerCase()}
							</a>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default VideoList;
