import Head from 'next/head';
import Image from 'next/image';
import Layout from '/components/layout';
import { ThemeContext } from '/components/ThemeContext';
import { FandomContext } from '/components/FandomContext';
import style from "/styles/modules/etc.module.scss";

/**
 * Defines elements of a page at the highest level, including:
 * 		- page theme (ThemeContext)
 * 		- page title (<Head>)
 * 		- page content (See Content() below)
 * @returns 
 */
export default function Template(){
	return (
		<FandomContext.Provider value=''>
		<ThemeContext.Provider value=''>
			<Head>
				<title>404: Not Found</title>
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
		<div className={style.center}>
			<h1>404: Page Not Found</h1>
			<div className={style.jean}>
				<Image 
				src={"https://64.media.tumblr.com/5aac244535ca84f39be4fed8ed6f3e67/4332a45f5c476be1-c0/s1280x1920/a5c1e3b34f2cb30ddebda142c24398b083df6baf.png"}
				fill={true}
				sizes='100vw'
				alt='Emote of Jean smiling nervously with a sweatdrop on her cheek'></Image>
			</div>
			
			<p>Whoops! Sorry, that page couldn't be found. It probably doesn't exist yet, since this site is a work in progress!</p>
		</div>
	);
}

