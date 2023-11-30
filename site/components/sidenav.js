import LinkButton from "./linkbtn";
import sidenav from "../styles/modules/sidenav.module.scss";
import { useContext, useState, useEffect } from "react";
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
				<a href={link}>
					<h1>{fandom}</h1>
				</a>
			</div>
			
			<Divider/>

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

function Menu(){
	const [links, setLinks] = useState([{title:"",text:"",href:""}]);

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
			{links.map(({title, text, href}) => <LinkButton path={href} title={title}>{text}</LinkButton>)}
		</div>
	);
}
