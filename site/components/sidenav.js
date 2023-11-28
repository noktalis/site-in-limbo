import Link from "next/link";
import LinkButton from "./linkbtn";
import sidenav from "../styles/modules/sidenav.module.scss";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { FandomContext } from "./FandomContext";

/**
 * Side navigation menu
 * 		Content changes based on the theme
 * @returns 
 */
export default function SideNav(){
	const theme = useContext(ThemeContext);
	const fandomContext = useContext(FandomContext);

	let fandom;
	let themeClass;
	let link;

	switch(fandomContext){
		case "ak":
			fandom = "Arknights";
			link = "/ak/";
			break;
		case "genshin":
			fandom = "Genshin";
			link = "/genshin/";
			break;
		case "hsr":
			fandom = "Star Rail";
			link = "/star_rail/";
			break;
		case "misc":
			fandom = "Misc.";
			link = "/misc/";
			break;
		default:
			fandom = "Navigation";
			link = "/";
	}

	switch(theme){
		case "test":
			themeClass = sidenav.test;	// TODO: change later
			break;
		case "lyt":
			themeClass = sidenav.lyt;
			break;
		default:
			themeClass = sidenav.lyt;
	}

	return(
		<div className={`${sidenav.nav} ${themeClass}`}>
			<div className={`${sidenav.container} ${sidenav.top}`}>
				<Link href={link}>
					<h1>{fandom}</h1>
				</Link>
			</div>
			
			<Divider/>

			{/* might turn this div into a Menu component */}
			<div className={`${sidenav.container} ${sidenav.bottom}`}>
				<LinkButton
					path={"/"}
					title={"Placeholder"}>
						Currently
				</LinkButton>
				<LinkButton
					path={"/"}
					title={"Placeholder"}>
						out
				</LinkButton>
				<LinkButton
					path={"/"}
					title={"Placeholder"}>
						of
				</LinkButton>
				<LinkButton
					path={"/"}
					title={"Placeholder"}>
						order
				</LinkButton>
				<LinkButton
					path={"/"}
					title={"Placeholder"}>
						&lt;/3
				</LinkButton>
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

// TODO: change content of sidenav based on fandom (Menu function here)