const Footer = () => {
	return (
		<div className="footer">
			<div className="footer_item">
				<h3 className="companyName">The SaarangIndia</h3>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						flexWrap: "wrap",
					}}
				>
					<img src="/footer_logo.png" width="120px" />
					<p className="footer_company_detail">
						India's Largest Student-run Journalism Organisation.
						Based in New Delhi and Mumbai, since 2020.
					</p>
				</div>
			</div>
			<div className="footer_item">
				<span className="footer_icon_box">
					<img src="/email.png" width="30px" />
					<h3>Email</h3>
				</span>
				<p className="footer_email_text">indiasaarang@gmail.com</p>
				<p className="footer_email_text">smayanoffcial@gmail.com</p>
				<p className="footer_email_text">kesarmathur@gmail.com</p>
			</div>
			<div className="footer_item">
				<span className="footer_icon_box">
					<img src="/phone-call.png" width="30px" />
					<h3>Phone</h3>
				</span>
				<p className="footer_email_text">N/A</p>
				<p className="footer_email_text">N/A</p>
				<p className="footer_email_text">N/A</p>
			</div>
		</div>
	);
};

export default Footer;
