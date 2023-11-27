import Head from 'next/head';
import Layout from '../../components/layout';
import { ThemeContext } from '../../components/ThemeContext';

/**
 * Arknights-related content home page
 * @returns 
 */
export default function Home(){
	return (
		<ThemeContext.Provider value='ak'>
			<Head>
				<title>Arknights Home</title>
				<link rel="icon" href="/ventiico.png" />
			</Head>
			<Layout><Content/></Layout>
		</ThemeContext.Provider>
	); // end return
} // end Home Component

/**
 * Contents uniquely defined on each page
 * @returns 
 */
function Content() {
	return (
		<div>
			<p>fanhfndsofds</p>
		</div>
	);
}
