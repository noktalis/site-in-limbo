import style from "../styles/modules/stickerBtn.module.scss";
import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

//TODO: button dimensions
// TODO: themes
export default function StickerButton({btnTitle, imgSide, imgSrc, imgAlt, imgSize, children}){	
	const theme = useContext(ThemeContext);
	let themeClass;

	switch(theme){
		case "lyt":
		default:
			themeClass = style.lyt;
	}
	
	return (
		<button role='link' 
			className={`${style.button} ${themeClass}`} 
			title={btnTitle}>
			<Sticker
				size={imgSize}
				side={imgSide}
				src={imgSrc}
				alt={imgAlt}/>
			{children}
		</button>
	);
}

function Sticker({side, src, alt, size}){
	let sideClass;
	let sizeClass;

	switch(side){
		case "right":
			sideClass = style.right;
			break;
		case "righter":
			sideClass = style.righter;
			break;
		case "lefter":
			sideClass = style.lefter;
			break;
		case "left":
		default:
			sideClass = style.left;
	}

	switch(size){
		case "big":
			sizeClass = style.big;
			break;
		case "bigger":
			sizeClass = style.bigger;
			break;
		case "small":
			sizeClass = style.small;
			break;
		case "smaller":
			sizeClass = style.samller;
			break;
		default:
			sizeClass = "";
	}

	return(
		<img
			className={`${style.sticker} ${sideClass} ${sizeClass}`}
			src={src}
			alt={alt}/>
	);
}