import Head from 'next/head';
import Layout from '../../components/pageFormat/layout';
import { ThemeContext } from '../../components/pageFormat/ThemeContext';
import { FandomContext } from '../../components/pageFormat/FandomContext';
import AssetDescription from '../../components/assetDesc';

/**
 * Defines elements of a page at the highest level, including:
 * 		- page theme (ThemeContext)
 * 		- page title (<Head>)
 * 		- page content (See Content() below)
 * @returns 
 */
export default function Page(){
	return (
		<FandomContext.Provider value=''>
		<ThemeContext.Provider value=''>
			<Head>
				<title>Asset Sources | Misc</title>
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
			<h1 style={{textAlign:"center"}}>Asset Source Acknowledgements</h1>
			<p>I fear being Perceived&trade; too much to directly ask any artists to use their art so I'm going to stick with the ones that say it's fine to use without asking as long as they're credited &lt;3</p>

			<hr/>

			<h2 style={{textAlign:"center"}}>Arknights</h2>

			<AssetDescription
				align="left"
				imgSrc="/images/ak/thorns_spiky.png">
					<p style={{textAlign:"center"}}>
						An <a href='https://twitter.com/asbestie/status/1302090666063921153?s=20'>edit of an official Arknights sticker</a> by <a href='https://twitter.com/asbestie'>@asbestie</a>
					</p>
					<p>
						They don't seem to be an artist, so there's no indication on their profile nor the post itself whether they want to be credited. But since it's an edit of official art, I'm going to take a guess that they intended for this edit to be used freely by fans since Hypergryph technically still holds the copyright.
					</p>
				</AssetDescription>


			<h2 style={{textAlign:"center"}}>Genshin</h2>

			


		</div>
	);
}

