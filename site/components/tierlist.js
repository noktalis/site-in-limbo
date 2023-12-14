import { useContext, useState, useEffect } from "react";

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
		<div>
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
		<div>
			<div>
				{letter}
			</div>
			<div>
				{list.map(({attributes}) => <Item attributes={attributes}/>)}
			</div>
		</div>
	);
}


function VO({attributes}){
	let char = attributes.character;
	let lang = attributes.lang;


	return(
		<div>
			{char} {lang}
		</div>
	);
}

