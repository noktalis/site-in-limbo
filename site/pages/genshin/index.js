import Head from 'next/head';
import Layout from '/components/layout';
import { ThemeContext } from '/components/ThemeContext';
import { FandomContext } from '/components/FandomContext';
import Nav2Col from '/components/nav2Col';
import StickerButtonLink from '/components/stickerbtnlink';

/**
 * Defines elements of a page at the highest level, including:
 * 		- page theme (ThemeContext)
 * 		- page title (<Head>)
 * 		- page content (See Content() below)
 * @returns 
 */
export default function Home(){
	return (
		<FandomContext.Provider value='genshin'>
		<ThemeContext.Provider value='lyt'>
			<Head>
				<title>Genshin Home</title>
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
			<h1 style={{textAlign:"center"}}>Genshin Impact</h1>
			<h3 style={{textAlign:"center"}}>The weeaboo game that's been holding my serotonin hostage for two years, yippee!!</h3>

			<p>
				If it was not already clear, yes, my favorite element is anemo.  
			</p>
			<p>
				Yes I love all the anemo characters.
			</p>
			<p>
				No I do not love them all equally LMAO.
			</p>

			<p>
				I'd put a picture here, but those take a lot of storage space so I'll put it in later.
			</p>

			<Nav2Col>
				<StickerButtonLink
					href={"/genshin/blorbos/"}
					btnTitle={"Genshin Blorbos"}
					imgSide={"lefter"}
					imgSize={"big"}
					imgSrc={"https://64.media.tumblr.com/2b1bd2bf6fa42a5df7e3b2469c503bd6/77331089143a31ce-af/s1280x1920/d61d2161abb25e3b85be353f7514b4096339b4c4.png"}
					imgAlt={"Venti, amazed"}>
						Blorbos
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/ships/"}
					btnTitle={"Genshin Ships"}
					imgSide={"righter"}
					imgSize={""}
					imgSrc={"https://64.media.tumblr.com/9353554dcd39efa572cf1654198a25d9/c16e3361993a1d61-db/s1280x1920/4d43f6c4e30fb5663aeb5930b060e0057bb8ac44.png"}
					imgAlt={"Xiao eating almond tofu"}>
						Ship List
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/wish/"}
					btnTitle={"My Primogem Savings"}
					imgSide={"left"}
					imgSize={""}
					imgSrc={"https://64.media.tumblr.com/96430863df291e66baec879d4d5a5f48/2efd9f400ea04908-c3/s400x600/cc3364ab0478254cfcf0543150ec36b692d25bea.pnj"}
					imgAlt={"Lynette clapping"}>
						Wishlist
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/haterism/"}
					btnTitle={"Genshin Haterisms"}
					imgSide={"right"}
					imgSize={""}
					imgSrc={"https://64.media.tumblr.com/16bda86a2593c5dd6a39075c637b51dc/b31fedeeae4e5294-c9/s1280x1920/fa4df89433c93462b319fd07550482adeb0bc971.png"}
					imgAlt={"Heizou about to inflict violence"}>
						Shit List
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/vo_rank/"}
					btnTitle={"Genshin Voiceover Rankings"}
					imgSide={"lefter"}
					imgSize={""}
					imgSrc={"https://64.media.tumblr.com/f4e85995735d44f06033052e6bb42116/673c391823193445-75/s400x600/768852549c00e066e7fa9339ef5adffa0494c1f5.png"}
					imgAlt={""}>
						Voiceover Rankings
				</StickerButtonLink>
				<StickerButtonLink
					href={"/genshin/au/"}
					btnTitle={"Genshin AU Ideas"}
					imgSide={"righter"}
					imgSize={"small"}
					imgSrc={"https://64.media.tumblr.com/08645b101b77e9679c952cd0e9264324/549ae0728a253d2f-f0/s400x600/56b87645d3a228f09f084b891732d1072b52235a.png"}
					imgAlt={"Empty page held by Layla"}>
						AU Ideas
				</StickerButtonLink>
			</Nav2Col>
		</div>
	);
}

