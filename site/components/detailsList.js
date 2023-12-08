import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import style from "../styles/modules/detailsList.module.scss";

export default function DetailsList({path}) {
	const [list, setList] = useState([{name:"",text:""}]);
	const theme = useContext(ThemeContext);
	let themeClass;

	/* Figure out which theme to appear with */
	switch(theme){
		case "ri":
			themeClass = style.ri;
			break;
		case "lyt":
			themeClass = style.lyt;
			break;
		case "mond":
		default:
			themeClass = style.mond;
	}

	/* Fetch the data */
	useEffect(() => {
		const fetchData = async() => {
			/* Fetch request */
			const response = await fetch(path);
			const obj = await response.json();
			const data = obj.entries;	// array of data

			console.log(data);
			setList(data);
		}
		fetchData()
		.catch(console.error);
	},[])

	return (
		<div className={`${style.container} ${themeClass}`}>
			{list.map(({name, text}) => 
				<details>
					<summary>
						<div className={style.summaryContainer}>
							<h2>{name}</h2>
						</div>
					</summary>
					<hr/>
					{text}
				</details>)}
		</div>
	);
}