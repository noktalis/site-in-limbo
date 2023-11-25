import format from "../styles/modules/main.module.scss";

/**
 * Main container that holds actual content for users at the center of the page
 * @param {Components} children - contents to be held inside 
 * @returns 
 */
export default function Main({children}){
	return(
		<div className={format.container}>
			<div className={format.main}>
				{children}
			</div>
			<Footer/>
		</div>
	);
}

// TODO: put footer here so scrollbar can be styled

export function Footer(){
	return (
		<div className={format.footer}>
			<p>:3</p>
		</div>
	);
}