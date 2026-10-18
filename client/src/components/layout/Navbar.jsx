import { motion, useAnimationControls } from "motion/react";
import { NavLink, useLocation } from "react-router-dom";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import Brand from "./Brand.jsx";

const navItems = [
	{ label: "Főoldal", to: "/", end: true },
	{ label: "Termékeink", to: "/termekek" },
	{ label: "Történetünk", to: "/tortenet" },
];

function getLinkPosition(link) {
	return {
		x: link.offsetLeft - 6,
		width: link.offsetWidth,
	};
}

export function SiteNavbar() {
	const { pathname } = useLocation();
	const navRef = useRef(null);
	const hoverControls = useAnimationControls();
	const [hoveredLink, setHoveredLink] = useState(null);

	function moveHighlight(link) {
		hoverControls.start({
			...getLinkPosition(link),
			opacity: 1,
			transition: {
				x: { type: "spring", stiffness: 300, damping: 30 },
				width: { type: "spring", stiffness: 300, damping: 30 },
				opacity: { duration: 0.12 },
			},
		});
	}

	function handleLinkHover(event, to) {
		setHoveredLink(to);
		moveHighlight(event.currentTarget);
	}

	const findActiveLink = useCallback(() => {
		const currentPath = pathname.startsWith("/termek/")
			? "/termekek"
			: pathname;
		return [...(navRef.current?.querySelectorAll("a") ?? [])].find(
			(link) => link.getAttribute("href") === currentPath,
		);
	}, [pathname]);

	useLayoutEffect(() => {
		const activeLink = findActiveLink();
		setHoveredLink(activeLink?.getAttribute("href") ?? null);
		hoverControls.set({
			...(activeLink ? getLinkPosition(activeLink) : { x: 0, width: 0 }),
			opacity: activeLink ? 1 : 0,
		});
	}, [findActiveLink, hoverControls]);

	function handleNavLeave() {
		const activeLink = findActiveLink();
		setHoveredLink(activeLink?.getAttribute("href") ?? null);
		if (activeLink) {
			moveHighlight(activeLink);
		} else {
			hoverControls.start({ opacity: 0, transition: { duration: 0.12 } });
		}
	}

	return (
		<header className="relative z-5 border-b border-system-grey-200 bg-system-grey-50/95">
			<div className="mx-auto flex min-h-21 w-[min(1160px,calc(100%-48px))] items-center justify-between gap-7 max-[680px]:min-h-18.5 max-[680px]:w-[calc(100%-32px)] max-[680px]:flex-wrap max-[680px]:gap-2.5 max-[680px]:py-3">
				<Brand />
				<nav
					ref={navRef}
					aria-label="Main Navbar"
					className="relative flex items-center gap-2 rounded-full border border-system-grey-200 bg-system-grey-100 p-1 max-[680px]:w-full max-[680px]:justify-between max-[680px]:gap-3"
					onMouseLeave={handleNavLeave}
				>
					<motion.span
						aria-hidden="true"
						className="pointer-events-none absolute inset-y-1 left-1.5 z-0 rounded-full border border-primary-500 bg-primary-500"
						animate={hoverControls}
					/>
					{navItems.map(({ label, to, end }) => (
						<NavLink
							className={`relative z-1 rounded-full px-4 py-2.5 text-sm font-semibold ${hoveredLink === to ? "text-bg" : "text-system-grey-700"} no-underline transition-colors max-[680px]:text-xs`}
							end={end}
							key={to}
							onMouseEnter={(event) => handleLinkHover(event, to)}
							to={to}
						>
							<span className="relative z-1">{label}</span>
						</NavLink>
					))}
				</nav>
			</div>
		</header>
	);
}

export default SiteNavbar;
