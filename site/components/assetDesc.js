import format from "../styles/modules/assetDesc.module.scss";


/**A component that holds an image and a description of the image on the side
 * 
 * @param {*} prop 
 * @returns 
 */
export default function AssetDescription({align, imgSrc, children}){
	if (align == "left") {
		return(<LeftDescription imgSrc={imgSrc}>{children}</LeftDescription>);
	} else {
		return(<RightDescription imgSrc={imgSrc}>{children}</RightDescription>);
	}
}

/**The image is on the left and the description is on the right.
 * 
 * @param {*} children - child elements to be placed inside the component
 */
export function LeftDescription({imgSrc, children}){
	return(
		<div className={format.container}>
			<img src={imgSrc}/>
			<hr/>
			<div>
				{children}
			</div>
		</div>
	);
}

/**The image is on the right and the description is on the left.
 * 
 * @param {*} children - child elements to be placed inside the component
 */
export function RightDescription({format, children}){
	return (
		<div className={style.container}>
			<div>
				{children}
			</div>
			<hr/>
			<img src={imgSrc}/>
		</div>
	);
}

