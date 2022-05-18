/* eslint-disable @next/next/no-img-element */
import React from "react";

const About: React.FC = () => {
	return (
		<div id='about' className='mt-10 grid lg:grid-cols-3 gap-4 justify-items-center items-center'>
			<div className='relative h-[500px] w-full flex justify-center items-center'>
				<img src='/images/about/hugo2.png' alt='About Hugo' className='h-[85%]' />
				<div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-[480px] w-[250px] border-zinc-900 border-2'></div>
			</div>
			<div className='relative h-[500px] w-full flex justify-center items-center'>
				<div className='relative p-[40px] h-[480px] w-[480px] flex flex-col justify-center items-center bg-gradient-to-r from-zinc-100 to-zinc-200 text-zinc break-words shadow-xl'>
					<h3 className='absolute top-[10%] right-2 text-5xl uppercase font-light text-right px-10'>About</h3>
					<p className='sm:text-base mt-16 px-5 max-w-lg'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a officiis laborum expedita inventore id minima voluptatum recusandae asperiores quos hic est repellat voluptas, praesentium voluptatem earum nesciunt laboriosam
						adipisci obcaecati deserunt? Perferendis delectus repellat praesentium id nihil facere culpa?
					</p>
				</div>
			</div>
			<div className='relative h-[500px] w-full flex justify-center items-center mt-4 lg:mt-0'>
				<div className="absolute h-[500px] w-full after:content-[''] after:absolute after:bg-zinc-100 after:h-full after:w-[340px] after:left-[45%] after:top-[45%] after:-translate-x-[50%] after:-translate-y-[50%] lg:after:-translate-y-[80%] after:shadow-xl">
					<img src='/images/about/wedding-intro.jpg' alt='About Hugo' className='absolute h-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] lg:-translate-y-[80%] z-10 shadow-xl' />
				</div>
			</div>
		</div>
	);
};

export default About;
