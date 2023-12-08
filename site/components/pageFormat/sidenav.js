import LinkButton from "../linkbtn";
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

	let bottom_extra;

	/* Figure out which theme to appear with */
	switch(theme){
		case "ri":
			themeClass = sidenav.ri;
			break;
		case "lyt":
			themeClass = sidenav.lyt;
			break;
		case "mond":
		default:
			themeClass = sidenav.mond;
			bottom_extra = <img className={sidenav.bottom_extra} src="/images/windwheel_asters.svg"></img>;
	}
	
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

	return(
		<div className={`${sidenav.nav} ${themeClass}`}>
			<div className={`${sidenav.container} ${sidenav.top}`}>
				{/* Changes based on fandom */}
				<a href={link}> 
					<h1>{fandom}</h1>
				</a>
			</div>

			<div className={`${sidenav.container} ${sidenav.bottom}`}>
				<Divider/>

				{/* Changes based on fandom */}
				<Menu/>

				{bottom_extra}
			</div>
			
			
		</div>
	);
}

/**
 * Divider between the top and bottom containers of the navigation menu
 * @returns 
 */
function Divider(){
	const theme = useContext(ThemeContext);
	let path;

	switch(theme) {
		case "lyt":
			path = "/images/lynette_teacup_segment.png";
			break;
		default:
			path = "";
	}

	return(
		<div className={sidenav.divider}>
			<img src={path}></img>
		</div>
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
			path = "/json/nav_ak.json";
			break;
		default:
			path = "/json/nav_default.json";
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
		<div className={sidenav.menu}>
			{/* Map each button's data to a LinkButton element */}
			{links.map(({title, text, href}) => <LinkButton path={href} title={title}>{text}</LinkButton>)}
			{/* <br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<p>hi</p> */}
		</div>
	);
}

/* References:
	https://www.reddit.com/r/reactjs/comments/pknouj/comment/hc4wv8m/?utm_source=share&utm_medium=web2x&context=3
*/