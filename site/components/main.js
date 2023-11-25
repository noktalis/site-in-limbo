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

/**
 * Footer at the bottom of the page
 * Goes into the container after Main so that its width doesn't span the whole page
 * @returns 
 */
export function Footer(){
	return (
		<div className={format.footer}>
			<p>:3</p>
		</div>
	);
}