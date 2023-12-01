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
	return (
		<div className={format.footer}>
			<p>:3</p>
		</div>
	);
}