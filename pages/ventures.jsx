import styles from "../styles/venture.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";

const Ventures = () => {
	return (
		<>
			<Header />
			<SectionHeading title="Baatcheet app" color="#8c52ff" />
			<div className="section">
				<div className={styles.item}>
					<img
						src="/ventures-img-1.png"
						width="220px"
						className={styles.img}
					/>
					<div className={styles.item_content}>
						<p>
							Working on creating a fool-proof human mind reading
							algorithm that clearly captures a person&apos;s
							mental capacity and whatever problem they must be
							facing with their Significant Other, Friend, Parent,
							etc. and based on that provide holistic and fun
							activities that help strengthen the bond. Coming
							from a conservative Indian family, I can understand
							how far away can one be while being so close
							together; Let&apos;s eradicate those
							&apos;Dooriyan&apos;. <br />
							<br />
							We also collect the data for each user, actively
							creating a working mind map. The future applications
							of which are, an algorithm that helps with better
							decision making, crisis analysis, motivation and
							problem-solving.
						</p>
						<div className={styles.social}>
							<img src="/linkedin-logo.png" width="30px" />
							<img src="/instagram.png" width="30px" />
						</div>
					</div>
				</div>
			</div>
			<SectionHeading title="noor ngo" color="#cb6ce6" />
			<div className="section">
				<div className={styles.item}>
					<img
						src="/ventures-img-2.png"
						width="220px"
						className={styles.img}
					/>
					<div className={styles.item_content}>
						<p>
							Noor. Qurbat. Muntazir. Without knowledge, the mind
							stands spineless. There is nothing greater than the
							one weapon that fights every evil, knowledge.
							<br />
							<br />
							Noor is a student run NGO, comprising of some of the
							most brilliant young minds of the nation. At Noor,
							we believe that learning is the biggest gift of all.
							So our entire team, spread throughout the country in
							cities like Mumbai and Delhi, works to organise
							workshops, an other Social Service Efforts.
						</p>
						<div className={styles.social}>
							<img src="/linkedin-logo.png" width="30px" />
							<img src="/instagram.png" width="30px" />
						</div>
					</div>
				</div>
			</div>
			<SectionHeading title="STUDENT SYNDICATE" color="#ff8a00" />
			<div className="section">
				<div className={styles.item}>
					<img
						src="/ventures-img-3.png"
						width="220px"
						className={styles.img}
					/>
					<div className={styles.item_content}>
						<p>
							Noor. Qurbat. Muntazir. Without knowledge, the mind
							stands spineless. There is nothing greater than the
							one weapon that fights every evil, knowledge.
							<br />
							<br />
							Noor is a student run NGO, comprising of some of the
							most brilliant young minds of the nation. At Noor,
							we believe that learning is the biggest gift of all.
							So our entire team, spread throughout the country in
							cities like Mumbai and Delhi, works to organise
							workshops, an other Social Service Efforts.
						</p>
						<div className={styles.social}>
							<img src="/linkedin-logo.png" width="30px" />
							<img src="/instagram.png" width="30px" />
						</div>
					</div>
				</div>
			</div>
			<SectionHeading title="Vanity Engine" color="#fa5300" />
			<div className="section">
				<div className={styles.item}>
					<img
						src="/ventures-img-4.png"
						width="220px"
						className={styles.img}
					/>
					<div className={styles.item_content}>
						<p>
							Noor. Qurbat. Muntazir. Without knowledge, the mind
							stands spineless. There is nothing greater than the
							one weapon that fights every evil, knowledge.
							<br />
							<br />
							Noor is a student run NGO, comprising of some of the
							most brilliant young minds of the nation. At Noor,
							we believe that learning is the biggest gift of all.
							So our entire team, spread throughout the country in
							cities like Mumbai and Delhi, works to organise
							workshops, an other Social Service Efforts.
						</p>
						<div className={styles.social}>
							<img src="/linkedin-logo.png" width="30px" />
							<img src="/instagram.png" width="30px" />
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Ventures;
