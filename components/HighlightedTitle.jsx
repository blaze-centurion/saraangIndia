const HighlightedTitle = ({ title }) => {
	return (
		<h3 className="highlight-container">
			<span className="highlight">{title}</span>
		</h3>
	);
};

export default HighlightedTitle;
