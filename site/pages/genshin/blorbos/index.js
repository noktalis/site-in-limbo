import Head from 'next/head';
import Layout from '/components/layout';
import { ThemeContext } from '/components/ThemeContext';
import { FandomContext } from '/components/FandomContext';
import Nav2Col from '/components/nav2Col';
import StickerButtonLink from '/components/stickerbtnlink';
import Dialogue from '/components/dialogue';
import { Bubble } from '/components/dialogue';

/**
 * Defines elements of a page at the highest level, including:
 * 		- page theme (ThemeContext)
 * 		- page title (<Head>)
 * 		- page content (See Content() below)
 * @returns 
 */
export default function Page(){
	return (
		<FandomContext.Provider value='genshin'>
		<ThemeContext.Provider value='lyt'>
			<Head>
				<title>Genshin Blorbos</title>
				<link rel="icon" href="/ventiico.png" />
			</Head>
			<Layout><Content/></Layout>
		</ThemeContext.Provider>
		</FandomContext.Provider>
		
	); // end return
} // end Component

/**
 * Contents uniquely defined on each page
 * @returns 
 */
function Content() {
	return (
		<div>
			{/* Dialogue about how I explain blorbos */}
			<Dialogue>
				<Bubble speaker="xue">
					i like that you don't even elaborate on Why they are blorbos
				</Bubble>

				<Bubble side="right" speaker="nat">
					they just are.
				</Bubble>
				<Bubble side="right" speaker="nat">
					i did not choose for them to move into my head rent free, they just did.
				</Bubble>

				<Bubble speaker="xue">
					me archiving my ten million billion essays n thoughts to my neocities vs. you
				</Bubble>
				<Bubble speaker="xue">
					"these are my blorbos"
				</Bubble>

				<Bubble side="right" speaker="nat">
					no thoughts, head empty, only blorbos
				</Bubble>

				<Bubble speaker="xue">
					"i will not elaborate on why i like them"
				</Bubble>
			</Dialogue>
			<hr/>

			{/* Current Blorbos */}
			<h1 style={{textAlign:"center"}}>Current Blorbos</h1>
			<h3 style={{textAlign:"center"}}>They live rent free in my head!</h3>
			<Nav2Col>
				<StickerButtonLink
					href={"/genshin/blorbos/venti"}
					btnTitle={"Venti"}
					imgSide={"left"}
					imgSize={"big"}
					imgSrc={"https://64.media.tumblr.com/5a9bf0def88f8557a16e8e61391de4b1/77331089143a31ce-3e/s1280x1920/a765a871e59dfabe31bf419c12e72f3714ad86b1.png"}
					imgAlt={"Venti throwing flowers"}>
						Venti
				</StickerButtonLink>
				<span/>
				<StickerButtonLink
					href={"/genshin/blorbos/lyney"}
					btnTitle={"Lyney"}
					imgSide={"lefter"}
					imgSize={""}
					imgSrc={"https://64.media.tumblr.com/2f412b50497353a1ad16618867f53a9c/f76574c9be82fb98-e0/s400x600/8dcefd829ac626555e9602d529d5a5419810b907.pnj"}
					imgAlt={"Lyney with stage fright"}>
						Lyney
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/blorbos/lynette"}
					btnTitle={"Lynette"}
					imgSide={"righter"}
					imgSize={"small"}
					imgSrc={"https://64.media.tumblr.com/95d0dfed670c71c6cc9b27b1edd32f7b/2efd9f400ea04908-31/s400x600/4d05a14c2f4f2ae687f475d99af5b2001a61b962.pnj"}
					imgAlt={"Lynette on low battery"}>
						Lynette
				</StickerButtonLink>
			</Nav2Col>
			<hr/>


			{/* Retired Blorbos */}
			<h1 style={{textAlign:"center"}}>Retired Blorbos</h1>
			<p>
				I don't know what to say, they packed up and escaped to move into an apartment together.
			</p>
			<p>
				(They were probably sick of me torturing them in AU's)
			</p>
			<Nav2Col>
				<StickerButtonLink
					href={"/genshin/blorbos/kazuha"}
					btnTitle={"Kazuha"}
					imgSide={"lefter"}
					imgSize={""}
					imgSrc={"https://64.media.tumblr.com/cde2bfc175365a96a7f9a2c7db4167f5/37c7eccdbc6391fe-07/s400x600/287649236dd41648dec486ee74df7a81761fc8c7.png"}
					imgAlt={"Kazuha chilling on a roof"}>
						Kazuha
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/blorbos/heizou"}
					btnTitle={"Heizou"}
					imgSide={"righter"}
					imgSize={""}
					imgSrc={"https://64.media.tumblr.com/b44558c93401e8fa1aa4923e42d2aff1/b31fedeeae4e5294-14/s400x600/3a1a7372a90a882f181776b4a1521c268b792a8f.png"}
					imgAlt={"Heizou sighing in relief"}>
						Heizou
				</StickerButtonLink>
			</Nav2Col>
			<hr/>


			{/* Honorable Mentions */}
			<h1 style={{textAlign:"center"}}>Honorable Mentions</h1>
			<p>
				They never quite reach Blorbo Status&trade; but I did have some thoughts about them for a while! 
			</p>
			<p>
				Except Wanderer, who I would still hate if he were real, where most of the thoughts were along the lines of "Damn, I hope Nahida gives him therapy" and "Hell yeah he's getting Therapy&trade;!!" AND THEN SHE SENT HIM TO SCHOOL UNDER THE NAME HATTIE AND I LAUGHED MY ASS OFF LMAOOOO
			</p>
			<Nav2Col>
				<StickerButtonLink
					href={"/genshin/blorbos/furina"}
					btnTitle={"Furina"}
					imgSide={"lefter"}
					imgSize={""}
					imgSrc={"https://static.wikia.nocookie.net/gensin-impact/images/4/4c/Icon_Emoji_Paimon%27s_Paintings_28_Furina_4.png"}
					imgAlt={"Furina being dramatic"}>
						Furina
				</StickerButtonLink>
				{/* TODO: replace with tumblr link */}
				<StickerButtonLink
					href={"/genshin/blorbos/wrio"}
					btnTitle={"Uncle Wriothesley"}
					imgSide={"righter"}
					imgSize={""}
					imgSrc={"https://static.wikia.nocookie.net/gensin-impact/images/8/82/Icon_Emoji_Paimon%27s_Paintings_27_Wriothesley_1.png"}
					imgAlt={"Worcestershire"}>
						Whoreslayer
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/blorbos/wanderer"}
					btnTitle={"Wanderer"}
					imgSide={"left"}
					imgSize={""}
					imgSrc={"https://64.media.tumblr.com/1a871b83e8147820949921f17c75afa1/4e98ca7b4695cb9a-66/s400x600/bebeef3df41f7313f559bc95e89fa556a5e9e77b.pnj"}
					imgAlt={"Wanderer forced to study"}>
						Wanderer
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/blorbos/nahida"}
					btnTitle={"Nahida"}
					imgSide={"right"}
					imgSize={""}
					imgSrc={"https://64.media.tumblr.com/201682898cd011ed0be3220431785e2d/054cd1d9f841ff76-9c/s400x600/9519b9a9bb14e6c1e04cecdb5a87ecc3873b7be2.png"}>
						Nahida
				</StickerButtonLink>
			</Nav2Col>
		</div>
	);
}

