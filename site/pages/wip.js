import Head from 'next/head';

export default function Home(){
	return (
		// div container to appease jsx
		<div>
			<Head>
				<title>Home</title>
			</Head>

			<div>
				<p>Hello World!</p>
			</div>
		</div>
	);
}