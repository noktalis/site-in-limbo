import Head from 'next/head';
import Layout from '../../components/pageFormat/layout';
import { ThemeContext } from '../../components/pageFormat/ThemeContext';
import { FandomContext } from '../../components/pageFormat/FandomContext';
import AssetDescription from '../../components/assetDesc';
import { LeftDescription, RightDescription } from '../../components/assetDesc';

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

			<h2 style={{textAlign:"center"}}>Arknights</h2>

			<AssetDescription
				align="left"
				imgSrc="/images/ak/thorns_spiky.png">Testing</AssetDescription>


			<h2 style={{textAlign:"center"}}>Genshin</h2>

			


		</div>
	);
}

