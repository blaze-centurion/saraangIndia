import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
	const router = useRouter();
	return (
		<div className="header">
			<div className="logo">
				<img src="/logo.png" width="100%" height="100%" />
			</div>
			<ul className="navbar">
				<li className={router.asPath === "/" ? "active" : ""}>
					<Link href="/">Home</Link>
				</li>
				<li className={router.asPath === "/about" ? "active" : ""}>
					<Link href="/about">About Us</Link>
				</li>
				<li className={router.asPath === "/ventures" ? "active" : ""}>
					<Link href="/ventures">Ventures</Link>
				</li>
				<li className={router.asPath === "#" ? "active" : ""}>
					<Link href="#">Social Service</Link>
				</li>
				<li
					className={
						router.asPath === "/founders-program" ? "active" : ""
					}
				>
					<Link href="/founders-program">Founders' Program</Link>
				</li>
				<li className={router.asPath === "#" ? "active" : ""}>
					<Link href="#">Join Us</Link>
				</li>
				<li className={router.asPath === "#" ? "active" : ""}>
					<Link href="#">Contact Us</Link>
				</li>
			</ul>
		</div>
	);
};

export default Header;
