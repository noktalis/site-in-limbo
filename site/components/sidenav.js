import LinkButton from "./linkbtn";
import sidenav from "../styles/modules/sidenav.module.scss";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import { FandomContext } from "./FandomContext";

/**
 * Side navigation menu
 * 		Content changes based on the fandom
 * @returns 
 */
export default function SideNav(){
	const theme = useContext(ThemeContext);
	const fandomContext = useContext(FandomContext);

	let fandom;
	let themeClass;
	let link;

	/* Figure out which header link to use at top of side nav */
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

	/* Figure out which theme to appear with */
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
				{/* Changes based on fandom */}
				<a href={link}> 
					<h1>{fandom}</h1>
				</a>
			</div>
			
			<Divider/>

			{/* Changes based on fandom */}
			<Menu/>
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

/**Navigation buttons in the bottom container of the navigation menu
 * 	Changes the set of buttons based on fandom
 * 
 * @returns 
 */
function Menu(){
	const [links, setLinks] = useState([{title:"",text:"",href:""}]);

	/* Figure out which set of button data to fetch based on fandom */
	let fandom = useContext(FandomContext);
	let path;
	switch(fandom){
		case "genshin":
			path = "/json/nav_gi.json";
			break;
		case "ak":
			path = "json/nav_ak.json";
			break;
		default:
			path = "json/nav_default.json";
	}

	/* Fetch the data */
	useEffect(() => {
		const fetchData = async() => {
			/* Fetch request */
			const response = await fetch(path);
			const obj = await response.json();
			const data = obj.buttons;	// array of button data

			console.log(data);
			setLinks(data);
		}
		fetchData()
		.catch(console.error);
	},[])

	return (
		<div className={`${sidenav.container} ${sidenav.bottom}`}>
			{/* Map each button's data to a LinkButton element */}
			{links.map(({title, text, href}) => <LinkButton path={href} title={title}>{text}</LinkButton>)}
		</div>
	);
}
