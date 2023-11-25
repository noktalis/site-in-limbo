import Link from "next/link";

export default function LinkButton({path, title, text}){
	return(
		<Link
			href={path}>
			<button role="link" title={title}>
				{text}
			</button>
		</Link>
	);
}