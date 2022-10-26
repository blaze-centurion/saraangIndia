import styles from "../styles/home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";

const Index = () => {
	return (
		<>
			<Header />

			<SectionHeading title="TSI UNIVERSE" color="#004aad" />
			<div className={styles.heroSections}>
				<div className="section">
					<h2 className={styles.heroSectionsTitle}>
						our esteemed <span>ventures</span> <br /> and{" "}
						<span>projects</span>...
					</h2>
					<p>The Vision of Indian Students since 2020.</p>
					<img
						src="/hero_section_bg.png"
						width="100%"
						className={styles.heroSectionsBanner}
					/>
				</div>
			</div>

			<div style={{ background: "#004aad", padding: "2rem 0" }}>
				<div className="section">
					<h3 className={styles.followedBoxTitle}>
						We are followed by
					</h3>
					<div className={styles.followedItemBox}>
						<p>director of laal singh chaddha & secret superstar</p>
						<p>Member(s) of legislative assembly </p>
						<p>
							Miss empress earth 2021 and MS UNIVERSE UNIVERSITY
						</p>
						<p>Several TV/MOVIE ACTORS AND PERONALITIES</p>
					</div>
					<div className={styles.followedItemBox}>
						<div>
							<span>127,675+</span>
							<p>people reached</p>
						</div>
						<div>
							<span>85,420+</span>
							<p>money raised</p>
						</div>
						<div>
							<span>107+</span>
							<p>interns trained</p>
						</div>
						<div>
							<span>12+</span>
							<p>blue tick followers</p>
						</div>
					</div>
				</div>
			</div>

			<SectionHeading title="What we do?" />
			<div className="section" style={{ padding: "0 4rem" }}>
				<div className={styles.work_item}>
					<img src="/what_we_do_1.png" width="150px" />
					<div style={{ padding: "0 10px" }}>
						<h4 style={{ color: "#ff8a00" }}>JOURNALISM</h4>
						<p>
							We are India's Largest Student-run Journalism
							Organisation. We produce original, unbiased and
							well-illustrated NEWS for teens, by teens. We have
							published over 100 articles and have interacted with
							over 100,000 users on social media.
						</p>
					</div>
				</div>
				<div className={styles.work_item}>
					<img src="/what_we_do_2.png" width="150px" />
					<div style={{ padding: "0 10px" }}>
						<h4 style={{ color: "#cb6ce6" }}>Social Service</h4>
						<p>
							NOOR NGO is a social-service venture by TSI. Our
							teams in Mumbai have conducted 10+ community service
							drives as well as raised over 50,000 in a fundraiser
							for THH NGO. It is The SaarangIndia's responsibility
							to sometimes step in the societal reform revolution
							and not just report it.
						</p>
					</div>
				</div>
				<div className={styles.work_item}>
					<img src="/what_we_do_3.png" width="150px" />
					<div style={{ padding: "0 10px" }}>
						<h4 style={{ color: "#a4dced" }}>
							Innovation and EDUCATION
						</h4>
						<p>
							The Student Syndicate is the Education and
							Scientific Innovation venture of TSI, where we
							create Student Resources like notes, PYQs, Question
							Bank and Counselling along with Seminars on Skill
							Building and online recorded tuitions on specific
							topics. Vanity Engine is a Fashion and Streetwear
							venture of TSI, where our team at NIFT DELHI creates
							Unique and Sustainable Apparel and also trains many
							high-school students. BaatCheet App is a Psychology
							and Family app that helps make stronger bonds.
						</p>
					</div>
				</div>

				<h4 className={styles.title}>join the revolution</h4>
				<p className={styles.bodyText}>
					To Join us either as an Intern or any position that is
					available on our Linkedin Page or if you feel you can serve
					the cause at a position that is not a part of our hierarchy;
					please mail us (indiasaarang@gmail.com) the following
					details,
				</p>
				<ul className={styles.list}>
					<li>Full-Name</li>
					<li>Contact Number (Whatsapp Preferably)</li>
					<li>
						CV/Resumé or a brief description of skill-set and
						past-experience.
					</li>
					<li>Social Media Handles</li>
				</ul>
				<h4 className={styles.title}>incentives</h4>
				<p className={styles.bodyText}>
					What we offer other than top-notch experience, upksill and
					network building at The SaarangIndia are as follows,
				</p>
				<ul className={styles.list}>
					<li>
						Letter of Appreciation and surprise gift at the end of a
						6-month tenure at TSI or any of our ventures,
					</li>
					<li>Contact Number (Whatsapp Preferably)</li>
					<li>
						Guaranteed Internship Placement at one of the best
						companies, Law Firms and Ventures in the world
						(Microsoft, Death Row Project, Latham and Watkins, JP
						Morgan Bank, etc.) at the end of a 12-month tenure at
						TSI or any of our ventures,
					</li>
					<li>
						Your work is put on the stage viewed by Ministers,
						All-Star Industry Leaders, Celebrities and Public
						Figures.
					</li>
				</ul>
			</div>

			<SectionHeading title="Articles" />
			<div
				className="section"
				style={{ textAlign: "center", padding: "2rem 0" }}
			>
				<img src="/article.png" width="80%" />
			</div>
			<SectionHeading title="Community SERVICE PROGRAMS" />

			<div className="section">
				<div className={styles.program_box}>
					<img src="/magazine.png" height="500px" />
					<div>
						<h3>Project Bedaag</h3>
						<p>
							𝑃𝑟𝑜𝑗𝑒𝑐𝑡 𝐵𝑒𝑑𝑎𝑎𝑔 - A humanitarian initiative to battle
							the deep-rooted stigma and misconceptions around
							menstruation. We raised over Rs. 35,000 and donated
							more than 350 sanitary pad kits among the homeless
							women in Cannaught Place as it is one of the
							landmarks of New Delhi and a village in Gurgaon. We
							also conducted a research study in collaboration
							with Gouri Mehra's 'In the Write Mind', and created
							a TV Commercial and many illustrative videos
							explaining the crisis on the net. These kits were
							also made by female entrepreneurs from 'Flowpads'
							and the project was recognised by the CM Office of
							New Delhi.
						</p>
					</div>
				</div>
				<div className={styles.program_box}>
					<div>
						<h3>Save Kerela Dogs</h3>
						<p>
							Kerala, the southern state with the highest literacy
							rate waiting for a nod from the SC to mass-murder
							street animals, or “free-roaming dogs”, is highly
							unethical, mundane, and morally wrong. There are
							ample reports regarding human deaths that’s
							interlinked with rabies, or, to be more direct,
							street dogs. However, contrary to this, there isn’t
							even an estimate for the total number or street dogs
							that are killed each year in India. We will be
							mailing a physical letter with the signatures
							collected through this petition to the state
							government of Kerala and the Supreme Court, as well
							as the lawyers and the judge involved in this case
							to request them to reject the approval, and make
							adequate amends.
						</p>
					</div>
					<img src="/mobile_app.png" />
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Index;
