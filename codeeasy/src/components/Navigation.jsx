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
	useEffect(() => {
		if (showModal === true) {
			document.body.style.overflow = "hidden";
			localStorage.setItem("showBtn", false);
		} else {
			document.body.style.overflow = "unset";
			localStorage.setItem("showBtn", true);
		}
	}, [showModal]);

	return (
		<header className='z-30 w-full  px-10 py-4 bg-[#f3f4f6] dark:bg-gray-900 drop-shadow-md dark:drop-shadow-[0_4px_3px_rgba(255,255,255,0.05)]'>
			<nav className='flex lg:flex-row flex-col md:justify-between mx-auto max-w-7xl'>
				<div className='flex justify-between'>
					<Link to='/' className='flex items-center '>
						<img src={logo} className='h-16' alt='CodeEasy logo' />
						<span className='font-bold text-xl dark:text-white'>CodeEasy</span>
					</Link>
					<button
						className='lg:hidden ml-4 p-2 px-4 dark:bg-transparent dark:border-white rounded-md border border-black'
						onClick={handleThemeSwitch}
					>
						<img
							src={theme === "dark" ? theme_light : theme_dark}
							alt='dark/light mode switch'
							className='w-9'
						/>
					</button>
				</div>
				<div className='flex justify-center items-center'>
					<div className='flex items-center justify-center my-4 space-x-1 md:my-0'>
						<NavLinks setShowModal={setShowModal} />
						<div className='hidden md:flex'>
							<LearnBtn />
						</div>
					</div>
				</div>
				<button
					className='hidden lg:block ml-4 p-2 px-4 dark:bg-transparent dark:border-white rounded-md border border-black'
					onClick={handleThemeSwitch}
				>
					<img
						src={theme === "dark" ? theme_light : theme_dark}
						alt='dark/light mode switch'
						className='w-9'
					/>
				</button>
			</nav>
			<div className='flex justify-center items-center md:hidden'>
				<LearnBtn />
			</div>

			{showModal && <Modal setShowModal={setShowModal} />}
		</header>
	);
};

export default Navigation;
