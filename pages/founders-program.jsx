import styles from "../styles/founder.module.css";
import Header from "../components/Header";
import SectionHeading from "../components/SectionHeading";
import Footer from "../components/Footer";
import HighlightedTitle from "../components/HighlightedTitle";

const FoundersProgram = () => {
	return (
		<>
			<Header />
			<SectionHeading title="Meet the founders" />

			<div className={`section ${styles.founderContainer}`}>
				<div className={styles.card}>
					<img src="/founder_card_img1.png" width="450px" />
					<div className={styles.social}>
						<a href="#">LinkedIn</a>
						<a href="#">Instagram</a>
					</div>
				</div>
				<div className={styles.card}>
					<img src="/founder_card_img2.png" width="450px" />
					<div className={styles.social}>
						<a href="#">LinkedIn</a>
						<a href="#">Instagram</a>
					</div>
				</div>
			</div>

			<SectionHeading title="FOUNDERS' PROGRAM" />

			<div className="section">
				<HighlightedTitle title="Launch your own start-up WITH ZERO RISK FOR FREE" />
				<p className={styles.content}>
					<bold>Founders' Program</bold> will support you in all ways
					to make sure that your start-up idea reaches it's
					functioning stage. From finding a founding team to marketing
					and operations, we will be with you every step of the way so
					that you do not face the risk of failure.
					<br /> <br />
					Furthermore,{" "}
					<bold>we will provide your employees with incentives</bold>,
					so not just zero risk but this is also a zero investment
					program. We are capable of building NGOs, Student
					Organisations, Small Businesses, Consulting Services,
					Tertiary Services, Tech/EdTech/MedTech/PsyTech Start-ups and
					branches for already established organisations.
					<br /> <br />
					In easy words, if you have zero experience in making an
					organisation, we will do it for you or{" "}
					<bold>if you already have an organisation</bold>, we will
					expand it however you vision.
				</p>
				<HighlightedTitle title="Have rights over the organisation we help you make" />
				<p className={styles.content}>
					Even though we help you make the organisation, we will not
					control your decisions on how it should be operated, and as
					trustworthy our reputation is,{" "}
					<bold>
						we will deliver you the foundations on which you can
						manage the operations.
					</bold>{" "}
					Your organisation/company is yours, it will only be a part
					of TSI CIRCUIT so that all the student community can move
					forward hand-in-hand and the collaboration is much easier.
				</p>

				<HighlightedTitle title="How long will it take?" />
				<p className={styles.content}>
					<bold>The SaarangIndia Incubation Team</bold> works day and
					night to ensure exceptional results.
				</p>
				<ul className={styles.list}>
					<li>NGO or NPO or Social Service Org - 14 Days</li>
					<li>Student Organisations - 20 Days </li>
					<li>
						Small Businesses (with all statistics and data) - 21
						Days
					</li>
					<li>Small Businesses (with customer base) - 35 Days </li>
					<li>Consulting and Tertiary Services - 14 Days</li>
					<li>Model UN - 21 Days</li>
					<li>EdTech/PsyTech Company - 1 Month</li>
					<li>Tech Company - 2 Months</li>
					<li>MedTech Company - 3 Months</li>
				</ul>
				<HighlightedTitle title="How to get started?" />
				<p className={styles.content}>
					We are working on the website forms, till then,{" "}
					<bold>kindly mail us</bold> at indiasaarang@gmail.com the
					following details,
				</p>
				<ul className={styles.list}>
					<li>Your Full Name</li>
					<li>Contact Number </li>
					<li>
						Full Names, Contact Number and E-Mail of any other team
						members
					</li>
					<li>
						A brief document (.pdf), which explains what your idea
						is, which field does it belong to, what help will you
						need from Team TSI and any other relevant information.{" "}
					</li>
					<li>
						CV or Resumé of you and your team (if you don't have a
						CV, write your skill-set, achievements and past
						experience in document & attach it).
					</li>
					<li>Social Media Handles</li>
				</ul>
			</div>

			<Footer />
		</>
	);
};

export default FoundersProgram;
