import Head from 'next/head';
import TopNav from '../components/topnav';
import theme from "../styles/modules/lynt.module.scss";
import style from "../styles/modules/content.module.scss";

export default function Home(){
	return (
		// div container to appease jsx
		<div className={theme.lynt}>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/ventiico.png" />
			</Head>

			<TopNav></TopNav>

			<div className={style.container}>
				

				<div className={style.main}>
					<p>Hello World!</p>
				</div>
			</div>
		</div>
	);
}
