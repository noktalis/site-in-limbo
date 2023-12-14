import { useContext, useState, useEffect } from "react";
import style from "../styles/modules/tierlist.module.scss";

/**Creates a tier list based on data from a given JSON file
 * 
 * @param {String} path - absolute path to the JSON file holding tier list data
 * @returns 
 */
export default function TierList({path}){

	/* Initial state before asyncronously fetching data */
	const [data, setData] = useState( 
		{	type:"vo",
			tiers:[{
				tier:"S",
				content:[{
					attributes: {
						character:"Placeholder",
						lang:"JP"
					}
				}]
			}]
		}
	);
	let type = data.type;

	/* Fetch the data */
	useEffect(() => {
		const fetchData = async() => {
			/* Fetch request */
			const response = await fetch(path);
			const obj = await response.json();
			const format = obj.format;

			/* Check that data is for a tier list */
			if(format == "tierlist"){
				type = obj.type;
				console.log(obj);
				setData(obj);	
			} else {
				throw new Error ("JSON data is invalid for tierlist format.");
			}
		}
		fetchData()
		.catch(console.error);
	},[])

	return (
		<div className={`${style.container}`}>
			{data.tiers.map(({tier,content}) => <Tier type={type} letter={tier} list={content}/>)}
		</div>
	);
}

/**
 * 
 * @param {String} type 	- the type of items being ranked
 * @param {String} letter 	- the letter representing the tier
 * @param {Object[]} list	- a list of items belonging in the tier (array = yellow[], items = purple {})
 * @returns 
 */
export function Tier({type, letter, list}){
	const ItemTypes = {
		"vo": VO
	};

	let Item = ItemTypes[type];

	return(
		<div className={`${style.tierContainer}`}>
			<div className={`${style.tierLetter}`}>
				{letter}
			</div>
			<div className={`${style.tierContent}`}>
				{list.map(({attributes}) => <Item attributes={attributes}/>)}
			</div>
		</div>
	);
}


function VO({attributes}){
	let char = attributes.character;
	let lang = attributes.lang;

	let src = char.split(" ").join("");
	src = `/images/genshin/icons/${src}.png`

	let alt = char + "'s Portrait";
	
	return(
		<div className={style.vo}>
			<img src={src} alt={alt}/>
			<div>
				{lang}
			</div>
		</div>
	);
}

