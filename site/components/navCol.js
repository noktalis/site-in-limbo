import format from "../styles/modules/navmenu.module.scss";

/**
 * Arranges elements of a menu into a single column
 * @param {*} prop
 * 		children - children elements
 * @returns 
 */
export default function NavCol({children}){
	return(
		<div className={format.oneCol}>
			{children}
		</div>
	);
}