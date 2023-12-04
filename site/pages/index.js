import Head from 'next/head';
import Link from 'next/link';
import Layout from '/components/layout';
import { ThemeContext } from '/components/ThemeContext';
import { FandomContext } from '/components/FandomContext';
import StickerButtonLink from '/components/stickerbtnlink';
import NavCol from '/components/navCol';

/**
 * Home page of website
 * @returns 
 */
export default function Home(){
	return (
		<FandomContext.Provider value=''>
		<ThemeContext.Provider value=''>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/ventiico.png" />
			</Head>
			<Layout><Content/></Layout>
		</ThemeContext.Provider>
		</FandomContext.Provider>
	); // end return
} // end Home Component

/**
 * Contents uniquely defined on each page
 * @returns 
 */
function Content() {
	return (
		<div>
			<h1 style={{textAlign:"center"}}>Welcome!</h1>
			<p>
				If you know me in real life but I don't talk about my unhinged thoughts about fictional characters with you, this site is not for you! Turn back now! You've been <em>unwelcomed</em> because I cannot handle being Perceived&trade; and Judged&trade; by you!!
			</p>
			<p>
				Okay, now that I've kicked those guys out, the rest of you are either my friends and/or internet strangers. I'm Nat and this is where I keep <em>some</em> of my brainrot and unhinged cringe :D! If you want to see the rest, like my (slightly more detailed) opinions on ships, AU's I've collaboratively created with my friend Xue, and my deepest, darkest, most hateriness rambling, I highly recommend you check out <Link target="_blank" href={"https://sincerelyandyourstruly.neocities.org"}>Xue's site</Link>!
			</p>
			<h1 style={{textAlign:"center"}}>Coming Soon (Eventually)</h1>
			<p>
				Some of these pages probably don't exist yet, whoops! Which ones? That's for you to find out. Go! Explore! Be freeeee!
			</p>

			<NavCol>
				<StickerButtonLink
					href={"/error/"}
					btnTitle={"Trope Tier List"}
					imgSide={"lefter"}
					imgSize={""}
					imgSrc={"https://64.media.tumblr.com/34912a32339e39b674f4769feb928988/2efd9f400ea04908-9d/s400x600/454d91d9902b4c7cfe2908c1c9b975244fbeb513.pnj"}
					imgAlt={"Lynette sipping tea"}>
						Trope Tier List
				</StickerButtonLink>
				<StickerButtonLink
					href={"/error/"}
					btnTitle={"Genshin Blorbo Shrines"}
					imgSide={"righter"}
					imgSize={""}
					imgSrc={"https://64.media.tumblr.com/651b585c99e86f7e60a948839e0e04c7/f76574c9be82fb98-0c/s400x600/932f33780e76d9e3fce74482a304e29bc4e66d4b.pnj"}
					imgAlt={"Lyney soaking in applause and confetti"}>
						Genshin Blorbo Shrines
				</StickerButtonLink>
				<StickerButtonLink
					href={"/error/"}
					btnTitle={"Arknights story moments that keep me up at night"}
					imgSide={"lefter"}
					imgSize={""}
					imgSrc={"https://64.media.tumblr.com/96430863df291e66baec879d4d5a5f48/2efd9f400ea04908-c3/s400x600/cc3364ab0478254cfcf0543150ec36b692d25bea.pnj"}
					imgAlt={"Lynette clapping"}>
						Arknights moments that keep me up at night
				</StickerButtonLink>
				<StickerButtonLink
					href={"/error/"}
					btnTitle={"Honkai: Star Rail"}
					imgSide={"righter"}
					imgSize={""}
					imgSrc={"https://64.media.tumblr.com/f91d2f6f379a01df5f901b830b06b2e7/c5a5a3383c4c5c89-db/s540x810/8b32e0ab783d18efaa8d51fb6ff9515f873764f3.png"}
					imgAlt={"Yanqing sad that he's broke"}>
						A pinch of Star Rail content
				</StickerButtonLink>
			</NavCol>
		</div>
	);
}
