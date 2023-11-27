import style from "../styles/modules/navcol.module.scss";



export default function NavCol({children}){
	return(
		<div className={style.menu}>
			{children}
		</div>
	);
}