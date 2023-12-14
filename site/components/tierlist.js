import { useContext, useState, useEffect } from "react";
import { RankContext } from "../components/pageFormat/RankContext";

/**Creates a tier list based on data from a given JSON file
 * 
 * @param {String} path - absolute path to the JSON file holding tier list data
 * @returns 
 */
export default function TierList({path}){

	/* Initial state before asyncronously fetching data */
	const [tiers, setTiers] = useState([ {"type":"","tiers":[]} ]);
	let type = "";

	/* Fetch the data */
	useEffect(() => {
		const fetchData = async() => {
			/* Fetch request */
			const response = await fetch(path);
			const obj = await response.json();
			const format = obj.format;

			/* Check that data is for a tier list */
			if(format == "tierlist"){
				const list = obj.tiers;
				type = obj.type;

				console.log(list);
				setTiers(list);
			} else {
				throw new Error ("JSON data is invalid for tierlist format.");
			}
		}
		fetchData()
		.catch(console.error);
	},[])


	return (
		<RankContext.Provider value={type}>
			<div>
				{tiers.map(({tier,content}) => <Tier tier={tier} list={content}/>)}
			</div>
		</RankContext.Provider>
	);
}


export function Tier({tier, list}){
	let itemType = useContext(RankContext);
	console.log(`${tier}: ${list[0].character}`);

	return(
		<div>
			<div>
				{/* {tier} */}
			</div>
			<div>
				{/* children */}
			</div>
		</div>
	);
}



