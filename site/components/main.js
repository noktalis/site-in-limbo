import format from "../styles/modules/main.module.scss";

/**
 * Main container that holds actual content for users
 * @param {Components} children - contents to be held inside 
 * @returns 
 */
export default function Main({children}){
	return(
		<div className={format.main}>
			{children}
		</div>
	);
}

// TODO: add footer