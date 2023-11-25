import format from "../styles/modules/main.module.scss";

export default function Main({children}){
	return(
		<div className={format.main}>
			{children}
		</div>
	);
}