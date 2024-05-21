import { useEffect } from "react";
import "./VideoList.css";
import VideoDisplay from "../videoDisplay/VideoDisplay";

const VideoList = ({ videos, setVideos }) => {
	async function getFetch() {
		fetch("https://full-stack-project-group2.netlify.app/api/videos")
			.then((res) => res.json())
			.then((data) => setVideos(data));
	}

	useEffect(() => {
		getFetch();
	}, []);

	async function removeVideo(id) {
		console.log(`deleting video ${id}`);
		const res = await fetch(`/api/videos/${id}`, {
			method: "DELETE",
		});
		if (res.status === 204) {
			await getFetch();
		}
	}

	return (
		<section id="videos-container">
			<ul className="video-list">
				{videos.map((video, index) => {
					return (
						<li key={index} className="video-card">
							<a className="video-link" href={video.src}>
								{video.title.toLowerCase()}
							</a>
							<VideoDisplay title={video.title} src={video.src} />
							<button onClick={() => removeVideo(video.id)}>
								Remove Video
							</button>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default VideoList;
