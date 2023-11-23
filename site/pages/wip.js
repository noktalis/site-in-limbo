import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import topnav from "../styles/modules/topnav.module.scss";
import colors from "../styles/modules/lynt-colors.module.scss";

const styles = {
	navStyle: {
		backgroundColor: colors.navBg
	},
	indicatorStyle: {
		backgroundColor: colors.indicatorBg
	},
	buttonStyle: {
		backgroundColor: colors.navBtn,
		color: colors.navBtnTxt
	}
}

export default function Home(){
	return (
		// div container to appease jsx
		<div>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/ventiico.png" />
			</Head>

			<TopNav></TopNav>

			<div>
				<p>Hello World!</p>
			</div>
		</div>
	);
}

function TopNav() {
	return (
		<div className={topnav.nav}
			style={styles.navStyle}>
			
			<Indicator type=""></Indicator>

			<div className={`${topnav.buttons} buttons`}
				id='navBtns'>
				<button style={styles.buttonStyle}>
					Home
				</button>
				<button style={styles.buttonStyle}>
					Arknights
				</button>
				<button style={styles.buttonStyle}>
					Genshin
				</button>
				<button style={styles.buttonStyle}>
					Star&nbsp;Rail
				</button>
				<button style={styles.buttonStyle}>
					Webring
				</button>
				<button style={styles.buttonStyle}>
					Misc.
				</button>
			</div>
		</div>
	);
}

function Indicator(type = "") {
	let path = "/images/";
	let altText = "Sticker of "

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

	return (
		<Image
			className={topnav.indicator}

			src={path}
			width={64}
			height={64}
			alt={altText}

			style={styles.indicatorStyle}
		/>
	);
}

