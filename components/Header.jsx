import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const Header = () => {
	const router = useRouter();
	const navRef = useRef();

	useEffect(() => {
		window.addEventListener("click", () => {
			if (!navRef.current) return;
			navRef.current.classList.remove("show");
		});
		return () =>
			window.removeEventListener("click", () => {
				if (!navRef.current) return;
				navRef.current.classList.remove("show");
			});
	}, []);

	return (
		<div className="header">
			<div className="logo">
				<img src="/logo.png" width="100%" height="100%" />
			</div>
			<div className="navbar_container">
				<button
					className="hamburger"
					onClick={(e) => {
						e.stopPropagation();
						navRef.current.classList.toggle("show");
					}}
				>
					<img src="/menu.png" width="25px" />
				</button>

				{/* Responsive Navbar */}
				<ul className="dropdown_nav" ref={navRef}>
					<li className={router.asPath === "/" ? "active" : ""}>
						<Link href="/">Home</Link>
					</li>
					<li className={router.asPath === "/about" ? "active" : ""}>
						<Link href="/about">About Us</Link>
					</li>
					<li
						className={
							router.asPath === "/ventures" ? "active" : ""
						}
					>
						<Link href="/ventures">Ventures</Link>
					</li>
					<li className={router.asPath === "#" ? "active" : ""}>
						<Link href="#">Social Service</Link>
					</li>
					<li
						className={
							router.asPath === "/founders-program"
								? "active"
								: ""
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

				{/* Navbar */}
				<ul className="navbar">
					<li className={router.asPath === "/" ? "active" : ""}>
						<Link href="/">Home</Link>
					</li>
					<li className={router.asPath === "/about" ? "active" : ""}>
						<Link href="/about">About Us</Link>
					</li>
					<li
						className={
							router.asPath === "/ventures" ? "active" : ""
						}
					>
						<Link href="/ventures">Ventures</Link>
					</li>
					<li className={router.asPath === "#" ? "active" : ""}>
						<Link href="#">Social Service</Link>
					</li>
					<li
						className={
							router.asPath === "/founders-program"
								? "active"
								: ""
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
		</div>
	);
};

export default Header;
