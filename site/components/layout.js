import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import TopNav from "./topnav";
import Container from "./container";
import background from "../styles/modules/background.module.scss";

/**
 * Layout of the page
 * 		Consists of the TopNav and Container
 * 		Background theme is styled at this level
 * @param {*} children - child elements to be displayed as content 
 * @returns 
 */
export default function Layout({children}){
	const theme = useContext(ThemeContext);
	let themeClass;

	switch(theme){
		case "lyt":
			themeClass = background.lyt;
			break;
		case "ri":
			themeClass = background.ri;
			break;
		case "mond":
		default:
			themeClass = background.mond;
	}

	return(
		<div className={themeClass}>
			<TopNav></TopNav>
			<Container>{children}</Container>
		</div>
	);
}