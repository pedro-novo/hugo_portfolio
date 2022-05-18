import React from "react";
import About from "./About";
import Divider from "./Divider";
import Portfolio from "./Portfolio";

export const Body: React.FC = () => {
	return (
		<div>
			<About />
			<Divider />
			<Portfolio />
		</div>
	);
};
