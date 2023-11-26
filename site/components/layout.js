import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Layout({children}){
	
	return(
		<div>
			<TopNav></TopNav>
			<Container>{children}</Container>
		</div>
	);
}