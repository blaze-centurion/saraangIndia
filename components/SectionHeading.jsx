const SectionHeading = ({ title, color = "#920303" }) => {
	return (
		<div className="section_heading" style={{ "--color": color }}>
			<span className="section_heading_span1"></span>
			<h3>{title}</h3>
			<span></span>
		</div>
	);
};

export default SectionHeading;
