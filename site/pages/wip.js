import Head from 'next/head';
import TopNav from '../components/topnav';
import Container from '../components/container';
import theme from "../styles/modules/lynt.module.scss";
import format from "../styles/modules/container.module.scss";

export default function Home(){
	return (
		// div container to appease jsx
		<div className={theme.bg}>
			<Head>
				<title>Home</title>
				<link rel="icon" href="/ventiico.png" />
			</Head>

			<TopNav type="ak"></TopNav>

			<Container contents={<Content/>}>
				{/* Left: Aside Menu */}
				{/* TODO: aside component */}

				{/* TODO: Content component define per page */}
			</Container>
		</div>
	); // end return
} // end Home Component

/**
 * Contents uniquely defined on each page
 * @returns 
 */
function Content() {
	return (
		<div>
			<h1>Header 1</h1>
			<h6>Header 6</h6>
			<p>Hello World!</p>
			<hr></hr>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu nisl nunc mi ipsum faucibus vitae. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. Et pharetra pharetra massa massa ultricies mi quis. Suspendisse potenti nullam ac tortor vitae purus. Libero nunc consequat interdum varius sit amet mattis.</p>
			<ul>
				<li>Item 2</li>
				<li>Item 1</li>
				<li>Item 4</li>
				<li>Item 3</li>
			</ul>
		</div>
	);
}

/* See context
https://react.dev/reference/react/Component
for semi-automating theming */
