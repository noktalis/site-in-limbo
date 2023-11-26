import format from "../styles/modules/container.module.scss";
import Main from "./main";
import SideNav from "./sidenav";

/**
 * Container that holds all elements aside from the top navigation bar
 * Divides itself into three sections:
 * 		Left: To hold the side navigation menu
 * 		Center: To hold the main container
 * 		Right: Empty space
 * @param {*} children - content to be held inside Main 
 * @returns 
 */
export default function Container({children}){
	return(
		<div className={format.container}>
			<SideNav></SideNav>
			<Main>{children}</Main>
		</div>
	);
}
