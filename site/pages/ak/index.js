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
		<FandomContext.Provider value='ak'>
		<ThemeContext.Provider value='ri'>
			<Head>
				<title>Arknights Home</title>
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
			<h1 style={{textAlign:"center"}}>Arknights</h1>
			<h3 style={{textAlign:"center"}}>The gacha game I've been married to the longest and also has such good skins</h3>

			<p>Arknights used to be my main gacha! But then I got burnt out from hyperfixation and started taking it casually heheh...</p>

			<p>It's a lot less time-intensive than Genshin to play, since most days I just let it run on my phone while I do other things, so I call it my "side hoe" gacha. I'm still pretty dedicated to it though! I love my Genshin blorbos, but in terms of gacha games as a whole I'd always choose Arknights over Genshin for a variety of reasons... most of which are because Hypergryph is a lot more generous to F2P Arknights players.</p>

			<Nav2Col>
				<StickerButtonLink
					href={"/ak/friend_id/"}
					btnTitle={"Friend ID"}
					imgSide={"lefter"}
					imgSize={""}
					imgSrc={"https://64.media.tumblr.com/2b1bd2bf6fa42a5df7e3b2469c503bd6/77331089143a31ce-af/s1280x1920/d61d2161abb25e3b85be353f7514b4096339b4c4.png"}
					imgAlt={"Venti, amazed"}>
						Friend ID
				</StickerButtonLink>
				<StickerButtonLink
					href={"/ak/skins/"}
					btnTitle={"Arknights Skins Tier List"}
					imgSide={"righter"}
					imgSize={""}
					imgSrc={"https://64.media.tumblr.com/9353554dcd39efa572cf1654198a25d9/c16e3361993a1d61-db/s1280x1920/4d43f6c4e30fb5663aeb5930b060e0057bb8ac44.png"}
					imgAlt={"Xiao eating almond tofu"}>
						Skins Tier List
				</StickerButtonLink>
				<StickerButtonLink
					href={"/ak/waifu/"}
					btnTitle={"Arknights Waifus"}
					imgSide={"left"}
					imgSize={""}
					imgSrc={"https://64.media.tumblr.com/96430863df291e66baec879d4d5a5f48/2efd9f400ea04908-c3/s400x600/cc3364ab0478254cfcf0543150ec36b692d25bea.pnj"}
					imgAlt={"Lynette clapping"}>
						Waifus
				</StickerButtonLink>
				<StickerButtonLink
					href={"/ak/ships/"}
					btnTitle={"Arknights Ships"}
					imgSide={"right"}
					imgSize={""}
					imgSrc={"https://64.media.tumblr.com/16bda86a2593c5dd6a39075c637b51dc/b31fedeeae4e5294-c9/s1280x1920/fa4df89433c93462b319fd07550482adeb0bc971.png"}
					imgAlt={"Heizou about to inflict violence"}>
						Ships
				</StickerButtonLink>
				<StickerButtonLink
					href={"/ak/wish/"}
					btnTitle={"Operator Wishlist"}
					imgSide={"lefter"}
					imgSize={""}
					imgSrc={"https://64.media.tumblr.com/f4e85995735d44f06033052e6bb42116/673c391823193445-75/s400x600/768852549c00e066e7fa9339ef5adffa0494c1f5.png"}
					imgAlt={""}>
						Wishlist
				</StickerButtonLink>
				<StickerButtonLink
					href={"/ak/story/"}
					btnTitle={"Story Highlights"}
					imgSide={"righter"}
					imgSize={""}
					imgSrc={"https://64.media.tumblr.com/08645b101b77e9679c952cd0e9264324/549ae0728a253d2f-f0/s400x600/56b87645d3a228f09f084b891732d1072b52235a.png"}
					imgAlt={"Empty page held by Layla"}>
						Story Highlights
				</StickerButtonLink>
			</Nav2Col>
		</div>
	);
}

