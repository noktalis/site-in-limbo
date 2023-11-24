import Image from 'next/image';
import Link from 'next/link';
import topnav from "../styles/modules/topnav.module.scss";

export default function TopNav() {
	return (
		<div className={topnav.nav}
			id='nav'>
			
			<Indicator type=""></Indicator>

			<div className={topnav.buttons}
				id='navBtns'
				style={{display: "grid"}}>

				<Link
					href="/">
					<button 
						role='link'
						title='Home'>
						Home
					</button>
				</Link>
				
				<Link
					href="/">
					<button 
						role='link'
						title='Arknights'>
						Arknights
					</button>
				</Link>

				<Link
					href="/">
					<button 
						role='link'
						title='Genshin'>
						Genshin
					</button>
				</Link>
				
				<Link
					href="/">
					<button 
						role='link'
						title='Star Rail'>
						Star&nbsp;Rail
					</button>
				</Link>

				<Link
					href="/">
					<button 
						role='link'
						title='Webring'>
						Webring
					</button>
				</Link>

				<Link
					href="/">
					<button 
						role='link'
						title='Miscellaneous'>
						Misc.
					</button>
				</Link>
				
			</div>
		</div>
	);
}

function Indicator(type = "") {
	let path = "/images/";
	let altText = "Sticker of "

	// Determines which image to use as indicator
	switch(type){
		case "ak":
			path += "bagpipe_potatoes.png";
			altText += "Bagpipe with potatoes";
			break;
		case "genshin":
			path += "";
			altText += "";
			break;
		case "hsr":
			path += "";
			altText += "Yanqing being smug";
			break;
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
