import Head from 'next/head';
import Layout from '/components/layout';
import { ThemeContext } from '/components/ThemeContext';
import { FandomContext } from '/components/FandomContext';
import StickerButtonLink from '/components/stickerbtnlink';
import NavCol from '/components/navCol';

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
				<title>Misc.</title>
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
			<NavCol>
				<StickerButtonLink
					href="/misc/assets/"
					btnTitle="Asset Source Acknowledgements"
					imgSide=""
					imgSize=""
					imgSrc=""
					imgAlt="">
						Asset Acknowledgements
				</StickerButtonLink>
			</NavCol>
		</div>
	);
}

