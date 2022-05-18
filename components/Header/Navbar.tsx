/* eslint-disable @next/next/no-img-element */
import React from "react";

const Navbar: React.FC = () => {
	return (
		<div className='absolute top-0 left-0 w-full h-[70px] flex justify-between items-center'>
			<div className='ml-4'>
				<img src='/images/logo/ralph.png' alt='logo' className='h-[64px]' />
			</div>
			<ul className='w-6/12 flex justify-evenly items-center'>
				<li>
					<a href='#header' className='transition'>
						Home
					</a>
				</li>
				<li>
					<a href='#about' className='transition'>
						About
					</a>
				</li>
				<li>
					<a href='#portfolio' className='transition'>
						Portfolio
					</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
