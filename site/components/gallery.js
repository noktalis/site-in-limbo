import format from "../styles/modules/gallery.module.scss";
import { useState, useEffect } from "react";

export default function Gallery({path}){
	const [images, setImages] = useState([{src:"",alt:""}]);

	/* Fetch the data for main main */
	useEffect(() => {
		const fetchData = async() => {
			/* Fetch request */
			const response = await fetch(path);
			const obj = await response.json();
			const data = obj.images;	// array of button data

			console.log(data);
			setImages(data);
		}
		fetchData()
		.catch(console.error);
	},[])

	return(
		<div className={format.container}>
			{images.map(({src,alt}, index) => <img src={src} alt={alt} key={index}/>)}
		</div>
	);
}



