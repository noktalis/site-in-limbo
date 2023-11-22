import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home(){
	return (
		// div container to appease jsx
		<div>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/ventiico.png" />
			</Head>

			<TopNav></TopNav>

			<div>
				<p>Hello World!</p>
			</div>
		</div>
	);
}

function TopNav() {
	return (
		<div>
			<Image
				src="/ventiico.png"
				width={100}
				height={100}
				alt='Placeholder'
			/>

			<div>
				<btn>
					<Link href={"/"}>Home</Link>
				</btn>
				<btn>
					<Link href={"/"}>Arknights</Link>
				</btn>
				<btn>
					<Link href={"/"}>Genshin</Link>
				</btn>
				<btn>
					<Link href={"/"}>Star Rail</Link>
				</btn>
				<btn>
					<Link href={"/"}>Webring</Link>
				</btn>
			</div>
		</div>
	);
}