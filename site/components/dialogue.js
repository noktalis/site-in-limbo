import format from "../styles/modules/dialogue.module.scss";



export default function Dialogue({children}){
	return (
		<div className={format.container}>
			{children}
		</div>
	);
}

export function Bubble({children, side, speaker}){
	let sideClass;
	switch(side){
		case "right":
			sideClass = format.right;
			break;
		case "left":
		default:
			sideClass = format.left;
	}

	let speakerClass;
	switch(speaker){
		case "hua":
			speakerClass = format.hua;
			break;
		default:
			speakerClass = format.nat;
	}

	return(
		<p className={`${format.bubble} ${sideClass} ${speakerClass}`}>
			{children}
		</p>
	);
}