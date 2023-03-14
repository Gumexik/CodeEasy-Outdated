import logo from "../assets/logo.png";
import theme_dark from "../assets/theme.png";
import theme_light from "../assets/theme_white.png";
import Modal from "./Modal";
import { useState, useEffect } from "react";
import LearnBtn from "./LearnBtn";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navigation = () => {
	const localTheme = localStorage.getItem("Mode");

	const [showModal, setShowModal] = useState(false);
	const [theme, setTheme] = useState(localTheme);

	useEffect(() => {
		localStorage.setItem("Mode", theme);

		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	if (showModal === true) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "unset";
	}

	return (
		<header className='z-30 w-full md:px-32 px-10 py-4 bg-[#f3f4f6] dark:bg-gray-900 relative drop-shadow-md dark:drop-shadow-[0_4px_3px_rgba(255,255,255,0.05)]'>
			<nav className='flex md:flex-row flex-col md:justify-between mx-auto max-w-7xl'>
				<Link to='/' className='flex items-center ml-4'>
					<img src={logo} className='h-16' alt='CodeEasy logo' />
					<span className='font-bold text-xl dark:text-white'>CodeEasy</span>
				</Link>

				<div className='flex items-center justify-center my-4 space-x-1 md:my-0'>
					<NavLinks setShowModal={setShowModal} />
					<div className='hidden md:flex'>
						<LearnBtn />
					</div>
				</div>
				<div className='mx-auto md:hidden'>
					<LearnBtn />
				</div>
				<button
					className='absolute right-12 md:top-5 p-2 dark:bg-transparent dark:border-white rounded-md border border-black'
					onClick={handleThemeSwitch}
				>
					<img
						src={theme === "dark" ? theme_light : theme_dark}
						alt='dark/light mode switch'
						className='w-9'
					/>
				</button>
			</nav>
			{showModal && <Modal setShowModal={setShowModal} />}
		</header>
	);
};

export default Navigation;
