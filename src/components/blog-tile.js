import React from "react";

const blogTileStyles = {
	padding: "1rem",
	border: "2px solid #113",
	boxShadow: "3px 3px 26px -20px rgba(66, 68, 90, 1)",
	heading: {
		fontFamily: "Arial",
	},
	paragraph: {
		fontFamily: "Courier New",
	},
};

const BlogTile = (props) => {
	const { heading, intro } = props;
	return (
		<article style={blogTileStyles} className="News">
			<h2 style={blogTileStyles.heading}>{heading}</h2>
			<p style={blogTileStyles.paragraph}>{`${intro.substring(0, 25)}...`}</p>
		</article>
	);
};

export default BlogTile;
