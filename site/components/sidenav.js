import LinkButton from "./linkbtn";

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
		<div>
			<Link>
				<h2>{fandom}</h2>
			</Link>
			<hr/>

			{/* Link Buttons */}
			<LinkButton
				path={"/"}
				title={"Placeholder"}
				text={"idk lol"}></LinkButton>
		</div>
	);
}