import { Link } from "react-router-dom";
import SiteLayout from "../components/layout/SiteLayout.jsx";
import Button from "../components/ui/Button/Button.jsx";
import ThreeDCarousel from "../components/ui/Card/3dCrausel/3dCrausel.jsx";
import Eyebrow from "../components/ui/Eyebrow/Eyebrow.jsx";
import ProductGrid from "../features/products/components/ProductGrid.jsx";
import { useFetchProducts } from "../features/products/hooks/useFetchProducts.js";
import "./HomePage.css";

function HomePage() {
	const { products, loading, error } = useFetchProducts();
	const featuredProducts = products.slice(0, 3);

	return (
		<SiteLayout>
			<section className="home-hero relative grid min-h-[545px] items-center overflow-hidden bg-system-grey-100 max-[680px]:min-h-0">
				<div className="relative z-[1] mx-auto grid w-[min(1160px,calc(100%_-_48px))] grid-cols-[minmax(0,1fr)_0.85fr] items-center gap-12 max-[900px]:grid-cols-[1fr_0.78fr] max-[900px]:gap-5 max-[680px]:w-[calc(100%_-_32px)] max-[680px]:grid-cols-1 max-[680px]:gap-0">
					<div className="max-w-[575px] py-16 max-[680px]:pb-[5px] max-[680px]:pt-[53px]">
						<Eyebrow>Karcagi Méz · természetes finomság</Eyebrow>
						<h1 className="my-[18px] font-serif text-[clamp(45px,6vw,70px)] font-semibold leading-[1.02] tracking-[-0.055em] max-[680px]:text-[clamp(43px,13vw,60px)]">
							A természet
							<br />
							édes <em className="font-medium text-primary-800">ajándéka.</em>
						</h1>
						<p className="m-0 max-w-[480px] text-base leading-[1.8] text-system-grey-600 max-[680px]:text-sm">
							Fedezd fel mézeink gazdag ízvilágát, és találd meg a kedvencedet a
							mindennapok apró örömeihez.
						</p>
						<div className="mt-[27px] flex flex-wrap gap-3">
							<Button as={Link} to="/termekek">
								Fedezd fel mézeinket
							</Button>
							<Button as={Link} to="/tortenet" variant="secondary">
								Ismerd meg történetem
							</Button>
						</div>
						<div className="mt-[27px] flex items-center gap-[9px] text-button-font-small text-system-grey-600">
							<span
								aria-hidden="true"
								className="grid size-6 place-items-center rounded-full bg-primary-900 text-[13px] text-primary-200"
							>
								✳
							</span>
							Természetes ízek, egyszerűen
						</div>
					</div>
					<div
						aria-label="Mézesüveg illusztráció"
						className="relative grid min-h-[400px] place-items-center max-[900px]:min-h-[340px] max-[680px]:mt-[3px] max-[680px]:min-h-[270px]"
						role="img"
					>
						<div className="hero-sun" />
						<div className="hero-leaf hero-leaf-one" />
						<div className="hero-leaf hero-leaf-two" />
						<div className="honey-jar">
							<div className="jar-label">
								<strong>Karcagi</strong>
								<span>termelői méz</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section
				aria-label="A mézeink jellemzői"
				className="mx-auto -mt-px grid w-[min(1160px,calc(100%_-_48px))] grid-cols-3 border-b border-system-grey-200 py-6 max-[680px]:w-[calc(100%_-_32px)] max-[680px]:grid-cols-1 max-[680px]:gap-[7px] max-[680px]:py-[17px]"
			>
				<div className="flex items-center justify-center gap-3 px-4 py-[6px] max-[680px]:justify-start max-[680px]:px-1 max-[680px]:py-[7px]">
					<span
						aria-hidden="true"
						className="grid size-[37px] shrink-0 place-items-center rounded-full bg-primary-900 text-[17px] text-primary-200"
					>
						✿
					</span>
					<span>
						<strong className="block text-body-b3-body">
							Természetes választás
						</strong>
						<small className="mt-[3px] block text-caption-c2-caption text-system-grey-600">
							Letisztult, valódi ízek
						</small>
					</span>
				</div>
				<div className="flex items-center justify-center gap-3 border-l border-system-grey-200 px-4 py-[6px] max-[680px]:justify-start max-[680px]:border-l-0 max-[680px]:px-1 max-[680px]:py-[7px]">
					<span
						aria-hidden="true"
						className="grid size-[37px] shrink-0 place-items-center rounded-full bg-primary-900 text-[17px] text-primary-200"
					>
						◉
					</span>
					<span>
						<strong className="block text-body-b3-body">
							Többféle kiszerelés
						</strong>
						<small className="mt-[3px] block text-caption-c2-caption text-system-grey-600">
							500 g és 1 kg
						</small>
					</span>
				</div>
				<div className="flex items-center justify-center gap-3 border-l border-system-grey-200 px-4 py-[6px] max-[680px]:justify-start max-[680px]:border-l-0 max-[680px]:px-1 max-[680px]:py-[7px]">
					<span
						aria-hidden="true"
						className="grid size-[37px] shrink-0 place-items-center rounded-full bg-primary-900 text-[17px] text-primary-200"
					>
						⌂
					</span>
					<span>
						<strong className="block text-body-b3-body">
							Gondos odafigyelés
						</strong>
						<small className="mt-[3px] block text-caption-c2-caption text-system-grey-600">
							Minden üvegben
						</small>
					</span>
				</div>
			</section>

			<section className="mx-auto w-[min(1160px,calc(100%_-_48px))] pt-[88px] max-[680px]:w-[calc(100%_-_32px)] max-[680px]:pt-[61px]">
				<div className="mx-auto mb-[37px] max-w-[660px] text-center max-[680px]:mb-[27px]">
					<Eyebrow>Fedezd fel</Eyebrow>
					<h2 className="mb-[10px] mt-[13px] font-serif text-[clamp(34px,4vw,47px)] font-semibold leading-[1.12] tracking-[-0.035em]">
						Válogass kedvedre
					</h2>
					<p className="m-0 text-body-b2-body leading-[1.7] text-system-grey-600">
						Találd meg azt a mézet, amelyik a legjobban illik a reggelihez, a
						teához vagy egy nyugodt pillanathoz.
					</p>
				</div>
				{loading && (
					<div className="px-[15px] py-[45px] text-center text-system-grey-600">
						Mézeink betöltése…
					</div>
				)}
				{!loading && error && (
					<div className="rounded-[13px] border border-system-red-200 bg-system-red-50 p-[27px] text-center text-system-red-900">
						{error}
					</div>
				)}
				{!loading && !error && <ProductGrid products={featuredProducts} />}
				<div className="mt-[30px] flex flex-wrap justify-center gap-3">
					<Button as={Link} to="/termekek" variant="secondary">
						Összes termék
					</Button>
				</div>
			</section>

			<section className="mx-auto w-[min(1160px,calc(100%_-_48px))] pt-[88px] max-[680px]:w-[calc(100%_-_32px)] max-[680px]:pt-[61px]">
				<div className="mx-auto mb-[37px] max-w-[660px] text-center max-[680px]:mb-[27px]">
					<Eyebrow>Karcagi Méz</Eyebrow>
					<h2 className="mb-[10px] mt-[13px] font-serif text-[clamp(34px,4vw,47px)] font-semibold leading-[1.12] tracking-[-0.035em]">
						Mézeink képekben
					</h2>
					<p className="m-0 text-body-b2-body leading-[1.7] text-system-grey-600">
						Nézd meg közelebbről a termékeinket a galériában.
					</p>
				</div>
				{loading ? (
					<div
						aria-live="polite"
						className="px-[15px] py-[45px] text-center text-system-grey-600"
					>
						Mézeink betöltése…
					</div>
				) : error ? (
					<div
						aria-live="polite"
						className="rounded-[13px] border border-system-red-200 bg-system-red-50 p-[27px] text-center text-system-red-900"
					>
						{error}
					</div>
				) : (
					<ThreeDCarousel works={products} />
				)}
			</section>

			<section className="mt-[86px] bg-system-grey-100 py-[66px] max-[680px]:mt-[63px] max-[680px]:py-[50px]">
				<div className="mx-auto grid w-[min(970px,calc(100%_-_48px))] grid-cols-[0.8fr_1fr] items-center gap-[70px] max-[680px]:w-[calc(100%_-_32px)] max-[680px]:grid-cols-1 max-[680px]:gap-[37px]">
					<div
						aria-hidden="true"
						className="mx-auto grid aspect-square w-[250px] place-content-center gap-[6px] rounded-full border border-primary-700 bg-system-grey-100 text-center text-primary-300 outline outline-1 outline-primary-700 outline-offset-2 max-[680px]:w-[185px]"
					>
						<span className="text-[11px] uppercase tracking-[0.18em]">
							Ízek, melyek
						</span>
						<strong className="font-serif text-[32px]">összehoznak</strong>
						<span className="text-[11px] uppercase tracking-[0.18em]">
							egy kanálnyira
						</span>
					</div>
					<div>
						<Eyebrow>Történetünk</Eyebrow>
						<h2 className="my-[14px] font-serif text-[40px] font-semibold tracking-[-0.04em] max-[680px]:text-[33px]">
							Apró örömök, egy üveg mézben.
						</h2>
						<p className="my-4 text-body-b2-body leading-[1.8] text-system-grey-600">
							Hiszünk abban, hogy a természetes ízeknek helyük van a
							hétköznapokban. Ismerd meg a Karcagi Méz történetét, és azt,
							hogyan szeretnénk közelebb hozni hozzád a méz szeretetét.
						</p>
						<Button
							as={Link}
							className="mt-2"
							to="/tortenet"
							variant="secondary"
						>
							Tovább a történetünkhöz
						</Button>
					</div>
				</div>
			</section>
		</SiteLayout>
	);
}

export default HomePage;
