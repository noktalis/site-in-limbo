import Link from "next/link";
import LinkButton from "./linkbtn";
import sidenav from "../styles/modules/sidenav.module.scss";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

/**
 * Side navigation menu
 * 		Content changes based on the theme
 * @returns 
 */
export default function SideNav(){
	const theme = useContext(ThemeContext);

	let fandom;
	let themeClass;

	// TODO: switch href
	switch(theme){
		case "ak":
			fandom = "Arknights";
			themeClass = sidenav.lyt;	// TODO: change later
			break;
		case "lyt":
		case "genshin":
			fandom = "Genshin";
			themeClass = sidenav.lyt;
			break;
		default:
			fandom = "Navigation";
			themeClass = sidenav.lyt;
	}

	return(
		<div className={`${sidenav.nav} ${themeClass}`}>
			<div className={`${sidenav.container} ${sidenav.top}`}>
				<Link href="/">
					<h1>{fandom}</h1>
				</Link>
			</div>
			
			<Divider/>

			{/* might turn this div into a Menu component */}
			<div className={`${sidenav.container} ${sidenav.bottom}`}>
				<LinkButton
				path={"/"}
				title={"Placeholder"}
				text={"idk lol"}></LinkButton>

				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<p>hi</p>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				<p>hi</p>
			</div>
		</div>
	);
}

/**
 * Divider between the top and bottom containers of the navigation menu
 * @returns 
 */
function Divider(){
	return(
		<div className={sidenav.divider}></div>
	);
}

// TODO: change content of sidenav based on theme (Menu function here)