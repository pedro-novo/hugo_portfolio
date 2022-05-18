/* eslint-disable @next/next/no-img-element */
import React from "react";
import ImageGallery from "./ImageGallery";

const Portfolio: React.FC = () => {
	return (
		<div id='portfolio' className='mt-12'>
			<h4 className='mx-auto uppercase text-4xl text-zinc-600 text-center border-y-4 border-zinc-300 w-[30%]'>My Portfolio</h4>
			<ImageGallery />
		</div>
	);
};

export default Portfolio;
