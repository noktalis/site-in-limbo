import Image from 'next/image';
import LinkButton from './linkbtn';
import topnav from "../styles/modules/topnav.module.scss";
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

// TODO: fix links later
/**
 * Top navigation bar of a page
 * Includes Indicator component and 6 navigation buttons between fandom pages
 * @returns 
 */
export default function TopNav() {
	const theme = useContext(ThemeContext);
	let themeClass;

	switch(theme){
		default:
			themeClass = topnav.lyt;
	}

	return (
		<div className={`${topnav.nav} ${themeClass}`}
			id='nav'>
			
			<Indicator></Indicator>
			<div className={topnav.buttons}
				id='navBtns'
				style={{display: "grid"}}>

				<LinkButton
					path={"/"}
					title={"Home"}>
						Home
				</LinkButton>

				<LinkButton
					path={"/"}
					title={"Arknights"}>
						Arknights
				</LinkButton>

				<LinkButton
					path={"/"}
					title={"Genshin Impact"}>
						Genshin
				</LinkButton>

				<LinkButton
					path={"/"}
					title={"Honkai: Star Rail"}>
						Star&nbsp;Rail
				</LinkButton>
				
				<LinkButton
					path={"/"}
					title={"Webring"}>
						Webring
				</LinkButton>

				<LinkButton
					path={"/"}
					title={"Miscellaneous"}>
						Misc.
				</LinkButton>
			</div>
		</div>
	);
}

/**
 * Image in the left corner of the top navigation bar INDICATING theme of the page
 * @returns 
 */
function Indicator() {
	const theme = useContext(ThemeContext);

	let path = "/images/";
	let altText = "Sticker of ";

	// Determines which image to use as indicator
	switch(theme){
		case "ak":
			path += "bagpipe_potatoes.png";
			altText += "Bagpipe with potatoes";
			break;
		case "genshin":
			path += "";
			altText += "";
			break;
		case "test":
		case "hsr":
			path = "https://64.media.tumblr.com/c6084b85a6c9949935cc323f4bab7642/c5a5a3383c4c5c89-73/s540x810/04c17256455d5697f857132543afb1180d195033.png";
			altText += "Yanqing being smug";
			break;
		case "test":
		default:
			path += "anemo.png";
			altText = "Symbol of Anemo from Genshin Impact"
	}

	function toggleMenu() {
		let nav = document.getElementById("nav");
		let menu = document.getElementById("navBtns");

		// Hide menu
		if (menu.style.display == 'grid') {
			menu.style.display = 'none';
			nav.style.gap = "0"; //removes funny gap under indicator
		} 
		//Show menu
		else {
			menu.style.display = 'grid';
			nav.style.gap = "2vh"; //returns room between indicator and buttons
		}
	}

	return (
		<Image
			className={topnav.indicator}
			id='indicator'

			src={path}
			width={64}
			height={64}
			alt={altText}
			title="Toggle Menu"

			onClick={toggleMenu}
		/>
	);
}
