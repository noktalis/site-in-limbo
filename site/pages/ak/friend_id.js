import Head from 'next/head';
import Layout from '/components/layout';
import { ThemeContext } from '/components/ThemeContext';
import { FandomContext } from '/components/FandomContext';

/**
 * Defines elements of a page at the highest level, including:
 * 		- page theme (ThemeContext)
 * 		- page title (<Head>)
 * 		- page content (See Content() below)
 * @returns 
 */
export default function Template(){
	return (
		// TODO: change fandom
		<FandomContext.Provider value='ak'>
		{/* // TODO: change page theme */}
		<ThemeContext.Provider value='ri'>
			<Head>
				{/* TODO: change page title */}
				<title>Template</title>
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
			<p>
				If you're a stranger and managed to find this page, congrats! Feel free to add me in-game, my username is <b>Noktalis#1026</b>.
			</p>
			<p>
				The most valuable waifu I own is my fucking-- potential 6 Bagpipe-- I swear I'm not a whale I don't have any other non-welfare 6*s at pot 6. She's maxed out, and I usually put her up regardless of whether a <abbr title="Continguency Contract">CC</abbr> season is going on.
			</p>

			<hr/>

			<h2 id="SupportUnits">Can you put so-and-so up as your support unit?</h2>
			<p>
				Here's a <a href="https://www.krooster.com/network/lookup/Noktalis">link</a> to all the units I own, although it might be a bit outdated. Most of my 6*s are raised, but my 5* and 4*s? Ah... They're most likely not promoted to <abbr title="Elite 2">E2</abbr>, sorry!
			</p>
			<p>
				If you want me to put up a certain unit, just shoot a message into <a href="https://sincerelyandyourstruly.neocities.org/ask/">Xue's askbox</a>. We're telepathically linked, so I'll know almost instantly! Oh, but do try to send another ask when you're done with needing that unit. Otherwise I'll just. Guess that you're done with them after a day?
			</p>
		</div>
	);
}

