const StarIcon = ({ selected, current }) => {
	return (
		<>
			<svg width="20" height="20" viewBox="0 0 68 60">
				<path
					d="m27.5,2 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
					fill={selected ? "red" : "none"}
					stroke={selected || current ? "red" : "grey"}
					strokeWidth="6"
					strokeLinejoin="round"
					strokeLinecap="round"
					transform="scale(1.2)"
				/>
			</svg>
		</>
	);
};

export default StarIcon;
