import format from "../styles/modules/main.module.scss";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

/**
 * Main container that holds actual content for users at the center of the page
 * @param {Components} children - contents to be held inside 
 * @returns 
 */
export default function Main({children}){
	const theme = useContext(ThemeContext);
	let themeClass;

	switch(theme){
		case "mond":
			themeClass = format.mond;
			break;
		case "ri":
			themeClass = format.ri;
			break;
		case "lyt":
		default:
			themeClass = format.lyt;
	}

	return(
		<div className={`${format.container} ${themeClass}`}>
			<div className={format.main}>
				{children}
			</div>
			<Footer/>
		</div>
	);
}

/**
 * Footer at the bottom of the page
 * Goes into the container after Main so that its width doesn't span the whole page
 * @returns 
 * 
 * Footer theme is handled by container in <Main>
 */
export function Footer(){
	const theme = useContext(ThemeContext);
	let child;

	switch(theme){
		case "ri":
			child = <span>
						<a href="https://raw.githubusercontent.com/Aceship/Arknight-Images/main/avg/backgrounds/26_g5_laterano_chapelout.png">Background</a> from <a href="https://aceship.github.io/AN-EN-Tags/akgallery.html">Aceship</a>!
					</span>;
			break;
		case "mond":
		default:
			child = <span>Windwheel Asters are from <a className={format.xue} href="https://sincerelyandyourstruly.neocities.org">Xue</a>!</span>;
	}
	return (
		<div className={format.footer}>
			{child}
		</div>
	);
}