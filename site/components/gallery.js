import format from "../styles/modules/gallery.module.scss";

export default function Gallery({children}){
	return(
		<div className={format.container}>
			{children}
		</div>
	);
}



