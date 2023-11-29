import format from "/styles/modules/webring.module.scss";
import { useState, useEffect } from "react";


let siteIndex;
const thisSite = "https://noktalis.github.io/webring/";


/** See https://stackoverflow.com/a/67949850 
 * https://stackoverflow.com/questions/72098665/how-to-use-data-of-an-async-function-inside-a-functional-component-to-render-htm
 * https://stackoverflow.com/questions/67949709/how-to-render-something-that-is-async-in-react
 * https://react.dev/reference/react/useEffect
*/
export default function WebringDisplay(){
	const [array, setArray] = useState([]);
	const hostURL = "/webring/weebring.json";
	var sites = null;

	useEffect(() => {
		async function fetchData(){
			const result = await fetch(hostURL)
			.then(response => response.json())
  			.then(data => {
				sites = data.sites;
				console.log(sites);
			});
			setArray(result);
		}
		fetchData();
	}, [])


	var placeholderImg = "https://64.media.tumblr.com/0350346a7a10be6c3443266e04db5def/32efd94d60ac6439-bc/s400x600/a9b10dac0a68206afd9d5fd6859835cad4ad97d1.png";
	
	return(
		<div className={format.container}>
			<div className={format.prev}>
				<img src={placeholderImg}></img>
				Prev
			</div>
			<div className={format.home}>
				<img src={placeholderImg}></img>
				Weebring Home
			</div>
			<div className={format.next}>
				<img src={placeholderImg}></img>
				Next
			</div>
		</div>
	);
}


function findSiteIndex(sites){
	let siteIndex;
	for (let i = 0; i < sites.length; i++) {
        let site = sites[i];

        // Compares current site's url with those of webring members
        if (thisSite == site.url || thisSite == site.shortURL) {    // if current site's url matches a member
            siteIndex = i;                                          // determine place in list
            break;                                                  // end search, leave for loop (maybe) early
        } else {
            console.log(`Could not find current site in webring.
            Current site: ${thisSite}`);
            siteIndex = null;                                       // otherwise, set current site's index as null
        }
    }
}