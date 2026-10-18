import { Link } from "react-router-dom";
import logoSrc from "../../../public/logo.svg";

function Brand({ footer = false }) {
	return (
		<Link
			className={`inline-flex h-10 items-center gap-[11px] text-system-grey-900 no-underline ${footer ? "text-system-white-100" : ""}`}
			to="/"
		>
			<img src={logoSrc} alt="Logo" className="h-full w-auto object-contain" />
			<span className="grid gap-px">
				<strong className="text-[19px] leading-[1.05] max-[680px]:text-[17px]">
					Nagy Attila Csaba
				</strong>
				<small className="text-[12px] small-caps tracking-[0.08em] text-system-grey-600">
					Őstermelő
				</small>
			</span>
		</Link>
	);
}

export default Brand;
