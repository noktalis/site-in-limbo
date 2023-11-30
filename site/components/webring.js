import format from "/styles/modules/webring.module.scss";
import { useState, useEffect } from "react";



const thisSite = "https://noktalis.github.io/webring/";	//TODO: temp

// indices
let siteIndex = null;
let home = 0;
let prev = 0;
let next = 0;
let here = 0;

export default function WebringDisplay(){
	// [homeTitle, homeURL, prevTitle, prevURL, nextTitle, nextURL]
	const [sites, setSites] = useState([{}]);
	const hostURL = "/webring/weebring.json";

	/**Fetches, processes, and selects webring data to be used
	 * 
	 */
	useEffect(() => {
		// uses const to avoid racing calls
		const fetchData = async () =>{
			// Fetch request
			const response = await fetch(hostURL);
			const obj = await response.json();
			const sites = obj.sites;				// sites of sites in webring

			// indices
			here = findSiteIndex(sites);
			home = 0;
			prev = (siteIndex - 1 + sites.length) % sites.length;
			next = (siteIndex + 1) % sites.length;

			console.log(`site index: ${siteIndex}
			 			prev site: ${prev}
						home: ${home}
						next site: ${next}
						sites: ${sites}`);
						
			setSites(sites);
		}
		fetchData()
		.catch(console.error);
	}, [])
	
	console.log(siteIndex);

	return(
		<div className={format.container}>
			<div className={format.prev}>
				<a title={sites[prev].title} href={sites[prev].shortURL} className={format.link} target='_blank'>
					Prev
				</a>
				<div className={format.imgContainer}>
					<img src="https://sincerelyandyourstruly.neocities.org/images/icons/xiaoico.png"></img>
				</div>
			</div>
			<div className={format.home}>
				<a title={sites[home].title} href={sites[home].shortURL} className={format.link} target='_blank'>
					Weebring Home
				</a>
				<div className={format.imgContainer}>
					<img src="/ventiico.png"></img>
				</div>
			</div>
			<div className={format.next}>
				<a title={sites[next].title} href={sites[next].shortURL} className={format.link} target='_blank'>
					Next
				</a>
				<div className={format.imgContainer}>
					<img src="https://betweenseasons.neocities.org/theme/images/icons/kazuico.png"></img>
				</div>
			</div>

			<div className={format.desc}>
				<h2>{sites[prev].title}</h2>
				<h4>Run by {sites[prev].runBy}!</h4>
			</div>

			<div className={format.desc}>
				<h4>Currently you're at</h4>
				<h2>{sites[here].title}</h2>
			</div>

			<div className={format.desc}>
				<h2>{sites[next].title}</h2>
				<h4>Run by {sites[next].runBy}!</h4>
			</div>
		</div>
	);
}

/**
 * Finds the index of the current site in the webring
 * 
 * @param {Object[]} sites	- sites of sites that are part of the webring
 * @returns index of current site
 */
function findSiteIndex(sites){
	// Search through sites of webring sites
	for (let i = 0; i < sites.length; i++) {
        let site = sites[i];

        // Compares current site's url with those of webring members
        if (thisSite == site.url || thisSite == site.shortURL) {
            siteIndex = i;
            break;
        } 
    }

	// Index remains null if site couldn't be found
	if (siteIndex == null){
		console.log(`Could not find current site in webring.
    	Current site: ${thisSite}`);
	}
	return siteIndex;
}

/**References
 * https://stackoverflow.com/a/67949850 
 * https://stackoverflow.com/questions/72098665/how-to-use-data-of-an-async-function-inside-a-functional-component-to-render-htm
 * https://stackoverflow.com/questions/67949709/how-to-render-something-that-is-async-in-react
 * https://react.dev/reference/react/useEffect
 */