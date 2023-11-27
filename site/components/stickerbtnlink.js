import Link from "next/link";
import StickerButton from "./stickerbtn";

/**
 * A button that functions as a link when clicked and has a sticker on the side
 * @param {*} prop - holds data within an object
 * @returns 
 */
export default function StickerButtonLink({href, btnTitle, imgSide, imgSrc, imgAlt, imgSize, children}){	
	
	return (
		<Link href={href}>
			<StickerButton
				btnTitle={btnTitle}
				imgSide={imgSide}
				imgSize={imgSize}
				imgSrc={imgSrc}
				imgAlt={imgAlt}>
					{children}
			</StickerButton>
		</Link>
	);
}
