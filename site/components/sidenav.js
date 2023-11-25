import Link from "next/link";
import Image from "next/image";
import LinkButton from "./linkbtn";
import sidenav from "../styles/modules/sidenav.module.scss";

export default function SideNav({type}){
	let fandom;

	switch(type){
		case "ak":
			fandom = "Arknights";
			break;
		default:
			fandom = "Navigation";
	}

	return(
		<div className={sidenav.nav}>
			<div className={`${sidenav.container} ${sidenav.top}`}>
				<Link href="/">
					<h1>{fandom}</h1>
				</Link>
			</div>
			
			<Divider/>

			<div className={`${sidenav.container} ${sidenav.bottom}`}>
				<LinkButton
				path={"/"}
				title={"Placeholder"}
				text={"idk lol"}></LinkButton>
			</div>

			<div className={sidenav.extra}></div>
		</div>
	);
}

function Divider(){
	return(
		<div className={sidenav.divider}></div>
	);
}