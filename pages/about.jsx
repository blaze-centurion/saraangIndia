import styles from "../styles/about.module.css";
import Header from "../components/Header";

const About = () => {
	return (
		<>
			<Header />
			<div className={styles.aboutSection}>
				<h3 className={styles.sectionTitle}>About Us</h3>
				<div className={`section ${styles.aboutContainer}`}>
					<div
						className={`${styles.aboutImgCont} ${styles.imageContainer}`}
					>
						<div
							style={{ position: "relative" }}
							className={styles.aboutImgBox}
						>
							<img
								src="/aboutImg1.png"
								width="350px"
								height="350px"
							/>
							<img
								src="/aboutImg3.png"
								width="350px"
								height="350px"
								className={styles.bottomImg}
							/>
						</div>
					</div>
					<div className={styles.content}>
						<p>
							Journalism can never be silent: that is its greatest
							virtue and its greatest fault. It must speak, and
							speak immediately, while the echoes of wonder, the
							claims of triumph and the signs of horror are still
							in the air. And that is what we stand for at The
							SaarangIndia! We are India's largest student-led
							journalism organisation with over 200 members and
							have published 100+ articles. We aim to train young
							minds as writers or techies to understand how work
							is done in a professional environment and publish an
							unbiased and complete overview on controversial
							topics to our viewers. By interviewing and blogging,
							we focus on raising awareness about social issues
							across the globe. We look forward to gaining and
							providing countless opportunities to students and
							making a significant change in the society.
						</p>
					</div>
				</div>
			</div>
			<div style={{ background: "var(--dark-gray)", padding: "4rem 0" }}>
				<div className={`section ${styles.aboutContainer}`}>
					<div className={`${styles.content} ${styles.instaContent}`}>
						<p>
							We are known for our unique illustration and design
							of articles and media. The trendy and eye-catching
							designs make Current Affairs more interesting.{" "}
							<br /> <br /> The Red Color represents our soul, it
							represents truth and order, and the dark-grey
							represents neutrality and unbiased facts. <br />{" "}
							<br /> When we started our latest line of
							beautifully illustrated articles, we crossed 1,000
							followers in 48 hours and right now we stand at
							2,300 followers and a reach of 27,000 users.
						</p>
					</div>
					<div className={`${styles.imageContainer}`}>
						<div
							style={{ position: "relative" }}
							className={styles.imgBox}
						>
							<img src="/insta.png" className={styles.instaImg} />
						</div>
					</div>
				</div>
			</div>
			<div style={{ background: "var(--primary)", padding: "4rem 0" }}>
				<div className={`section ${styles.aboutContainer}`}>
					<div className={styles.imageContainer}>
						<div
							style={{ position: "relative" }}
							className={styles.imgBox}
						>
							<img
								src="/aboutImg4.png"
								className={styles.newsImg}
							/>
						</div>
					</div>
					<div className={styles.content}>
						<h3>2021</h3>
						<p>
							On March 24, 2022, The SaarangIndia completed its
							364 Days around the world. This year we worked with
							more than 25 Instagram Influencers, interviewed 3
							Niche-YouTubers, successfully carried out a monthly
							news-update video series, launched our merchandise,
							conducted Delhi's Largest Menstruation Safety Kit
							Distribution Drive in two cities, posted more than
							70 articles, 50 reels and 30+ frequent update NEWS.
						</p>
						<h3>2022</h3>
						<p>
							We started our venture exploration program where we
							founded NOOR NPO, BaatCheet App, The Student
							Syndicate, Vanity Engine and Model UN. We also
							upgraded our incentives to surprise gifts and
							guaranteed internships at the best companies, banks,
							firms and projects in the world.
						</p>
					</div>
				</div>
			</div>
			<div className={styles.galleryContainer}>
				<div className={styles.galleryBox}>
					<img src="/about_gallery_1.png" width="400px" />
					<img src="/about_gallery_2.png" width="400px" />
					<img src="/about_gallery_3.png" width="400px" />
					<img src="/about_gallery_4.png" width="400px" />
				</div>
			</div>
		</>
	);
};

export default About;
