import "./VideoDisplay.css";

const VideoDisplay = ({ title, src }) => {
	function isValidUrl(link) {
		const baseURL = "";
		try {
			new URL(link);
		} catch (_) {
			return false;
		}
		return true;
	}
	function embedYoutubeLink(link) {
		return link.replace("watch?v=", "embed/");
	}
	return (
		<div className="video-display-wrapper">
			{isValidUrl(src) ? (
				<iframe
					className="video-display"
					src={embedYoutubeLink(src)}
					title={title}
				></iframe>
			) : (
				<div className="video-display display-error">
					<p>Video Unavailable</p>
				</div>
			)}
		</div>
	);
};

export default VideoDisplay;
