import React from "react";
import { Link } from "react-router-dom";

const LearnBtn = () => {
	if (
		window.location.pathname === "/" ||
		window.location.pathname === "/profile" ||
		window.location.pathname === "/projects" ||
		window.location.pathname === "/newproject"
	) {
		return (
			<Link
				to='/learn'
				className='bg-[#fde904] border-2 border-amber-400 shadow-md text-center rounded py-[11px] px-[24px] relative group overflow-hidden'
			>
				<div className='absolute inset-0 w-2 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full'></div>
				<span className='relative text-black group-hover:text-white text-sm md:text-base'>
					Start Learning
				</span>
			</Link>
		);
	} else {
		return;
	}
};

export default LearnBtn;
