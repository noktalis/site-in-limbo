import Head from 'next/head';
import Layout from '/components/layout';
import { ThemeContext } from '/components/ThemeContext';
import { FandomContext } from '/components/FandomContext';
import style from "/styles/modules/main.module.scss";

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
		<ThemeContext.Provider value='lyt'>
			<Head>
				<title>The Weebring</title>
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
			<h1>The Weebring</h1>
			<p>Behold... the webring, Weebring!!!</p>
			<p>
				<span className={style.hua}>Hua</span> put this all together and is the main admin of the ring! An index of all the sites in the WeebRing can be found here: <span>
					<a title="WeebRing Home" href="https://sincerelyandyourstruly.neocities.org/webring/">
						WeebRing Home</a></span>
			</p>
		</div>
	);
}

