import { useEffect, useRef, useState } from "react";
import "./VideoRating.css";
import StarIcon from "./ratingStar";

const VideoRating = ({ video }) => {
	const [newRating, setNewRating] = useState();
	const [currentRating, setCurrentRating] = useState(
		video.rating / video.rating_count
	);

	useEffect(() => {
		if (newRating) {
			UpdateNewRating(newRating);
		}
	}, [newRating]);

	async function UpdateNewRating(rating) {
		const res = await fetch(`/api/videos/rating/${video.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ newRating: rating }),
		});
		const updatedRatingData = await res.json();
		setCurrentRating(updatedRatingData.rating / updatedRatingData.rating_count);
	}

	return (
		<>
			<div className="rating-container">
				{[1, 2, 3, 4, 5].map((value) => {
					return (
						<span
							key={value}
							value={value}
							className="rating-span"
							onClick={() => setNewRating(value)}
						>
							<StarIcon
								selected={newRating >= value ? true : false}
								current={currentRating >= value ? true : false}
							/>
						</span>
					);
				})}
				<p>{currentRating ? currentRating.toFixed(1) : 0}</p>
			</div>
		</>
	);
};

export default VideoRating;
