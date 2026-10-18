import Footer from "./Footer.jsx";
import { SiteNavbar } from "./Navbar.jsx";

function SiteLayout({ children }) {
	return (
		<div className="flex min-h-screen flex-col">
			<SiteNavbar />
			<main className="flex-1">{children}</main>
			<Footer />
		</div>
	);
}

export default SiteLayout;
