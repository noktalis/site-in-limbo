import style from "../styles/modules/quote.module.scss";
import { useContext } from "react";
import { ThemeContext } from "./pageFormat/ThemeContext";

// TODO: docs

export default function Quote({quote, speaker}) {
	let theme = useContext(ThemeContext);
	let themeClass;

	switch(theme) {
		case "ri":
			themeClass = style.ri;
			break;
		case "mond":
		default:
			style.mond;
	}

	return(
		<div className={style.container}>
			<div className={`${style.main} ${themeClass}`}>
				<blockquote>{quote}</blockquote>
				{speaker}
			</div>
		</div>
	);
}