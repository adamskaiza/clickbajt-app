import React from "react";
import BlogTile from "./components/blog-tile";

const posts = [
	{
		id: 1,
		title: "Pilne: Co to był za dzień!",
		intro: "Tego świat jeszcze nie widział",
	},
	{
		id: 2,
		title: "Wszyscy zazdroszą Polakom!",
		intro: "Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił",
	},
	{
		id: 3,
		title: "Adam Małysz Zgolił wąs",
		intro:
			"Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy",
	},
];

const mainStyles = {
	maxWidth: 1200,
	margin: "auto",
	padding: "1rem",
	heading: {
		gridRow: 1,
		gridColumn: "1 / 3",
	},
	grid: {
		display: "grid",
		gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
		gridGap: "1rem",
	},
};

const App = () => {
	return (
		<section style={mainStyles} className="blog">
			<h1 style={mainStyles.heading}>Przeczytaj nasze newsy</h1>
			<section style={mainStyles.grid}>
				{posts.map((post) => {
					const { id, title, intro } = post;
					return <BlogTile key={`news-${id}`} heading={title} intro={intro} />;
				})}
			</section>
		</section>
	);
};

export default App;
