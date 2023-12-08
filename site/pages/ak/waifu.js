import Head from 'next/head';
import Layout from '/components/layout';
import { ThemeContext } from '/components/ThemeContext';
import { FandomContext } from '/components/FandomContext';
import Quote from '/components/quote';
import DetailsList from '../../components/detailsList';

/**
 * Defines elements of a page at the highest level, including:
 * 		- page theme (ThemeContext)
 * 		- page title (<Head>)
 * 		- page content (See Content() below)
 * @returns 
 */
export default function Page(){
	return (
		<FandomContext.Provider value='ak'>
		<ThemeContext.Provider value='ri'>
			<Head>
				<title>Waifus | Arknights</title>
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
	let quote = "Sometimes it takes a real man to become the best girl.";
	let speaker = <p>&ndash;Gigguk explaining why 'waifu' is an umbrella term that includes husbandos</p>;

	return (
		<div>
			<h1 style={{textAlign:'center'}}>Waifus</h1>
			<Quote quote={quote} speaker={speaker}/>

			<DetailsList path={"/json/ak_waifus.json"}></DetailsList>
		</div>
	);
}

