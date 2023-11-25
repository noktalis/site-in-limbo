import format from "../styles/modules/container.module.scss";
import Main from "./main";
import SideNav from "./sidenav";

// TODO: handle aside types
/**
 * Container that holds all elements aside from the top navigation bar
 * Divides itself into three sections:
 * 		Left: To hold the side navigation menu
 * 		Center: To hold the main container
 * 		Right: Empty space
 * @param {*} contents - content to be held inside Main 
 * @returns 
 */
export default function Container({contents}){
	return(
		<div className={format.container}>
			<SideNav type={""}></SideNav>
			<Main children={contents}/>
		</div>
	);
}
