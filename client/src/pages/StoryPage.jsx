import { Link } from "react-router-dom";
import SiteLayout from "../components/layout/SiteLayout.jsx";
import Button from "../components/ui/Button/Button.jsx";
import Eyebrow from "../components/ui/Eyebrow/Eyebrow.jsx";

const storySections = [
	{
		number: "01",
		title: "A természet adja az alapot",
		text: "A méz különleges íze a virágok, az évszakok és a méhek munkájának találkozásából születik. Mi ezt a sokszínűséget szeretnénk megmutatni minden üvegben.",
	},
	{
		number: "02",
		title: "Az egyszerű dolgok öröme",
		text: "Egy kanál méz a reggeli teában, egy szelet kenyéren vagy egy közös családi asztalnál: apró pillanatok, amelyekből emlékek lesznek.",
	},
	{
		number: "03",
		title: "Karcagi Méz, szeretettel",
		text: "A Karcagi Méz azért született, hogy közelebb hozza a természetes mézek világát. Böngéssz a kínálatban, és találd meg azt az ízt, amelyik hozzád illik.",
	},
];

function StoryPage() {
	return (
		<SiteLayout>
			<section className="bg-system-grey-100 px-0 py-[72px] pb-[68px]">
				<div className="mx-auto w-[min(1160px,calc(100%_-_48px))] max-[680px]:w-[calc(100%_-_32px)]">
					<Eyebrow>Történetünk</Eyebrow>
					<h1 className="my-[15px] font-serif text-[clamp(42px,6vw,65px)] font-semibold leading-[1.05] tracking-[-0.05em]">
						Egy kis természet
						<br />
						minden napra.
					</h1>
					<p className="my-4 max-w-[650px] text-body-b1-body leading-[1.8] text-system-grey-600">
						A Karcagi Méz mögött egy egyszerű gondolat áll: a természetes
						ízeknek legyen helyük a mindennapokban.
					</p>
				</div>
			</section>
			<section className="mx-auto w-[min(850px,calc(100%_-_48px))] pt-[65px] max-[680px]:w-[calc(100%_-_32px)] max-[680px]:pt-[35px]">
				{storySections.map((section) => (
					<article className="grid grid-cols-[90px_1fr] gap-6 border-b border-system-grey-200 py-[29px] max-[680px]:grid-cols-[48px_1fr] max-[680px]:gap-[14px] max-[680px]:py-[22px]" key={section.number}>
						<span aria-hidden="true" className="font-serif text-headline-h3-headline text-primary-700 max-[680px]:text-[30px]">
							{section.number}
						</span>
						<div>
							<h2 className="mb-[9px] mt-0 font-serif text-[26px] font-semibold max-[680px]:text-[22px]">{section.title}</h2>
							<p className="m-0 text-body-b3-body leading-[1.8] text-system-grey-600">{section.text}</p>
						</div>
					</article>
				))}
				<div className="mt-[35px] rounded-[15px] bg-system-grey-100 p-7 text-center">
					<h2 className="mb-[15px] mt-0 font-serif text-[25px] font-semibold">Fedezd fel mézeinket</h2>
					<Button as={Link} to="/termekek">
						Megnézem a termékeket <span aria-hidden="true">→</span>
					</Button>
				</div>
			</section>
		</SiteLayout>
	);
}

export default StoryPage;
