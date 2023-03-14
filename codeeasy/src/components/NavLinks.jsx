import React from "react";
import { useContext } from "react";
import userContext from "../context/userContext";
import { Link } from "react-router-dom";
const NavLinks = ({ setShowModal }) => {
	const { userData } = useContext(userContext);

	const logOut = () => {
		localStorage.setItem("auth-token", "undefined");
		window.location.reload(false);
	};

	return (
		<div className='flex items-center flex-col md:flex-row justify-center gap-2 md:gap-0'>
			{!userData.user ? (
				<Link
					className='text-sm border-4 md:text-base mx-4 md:border-2 border-[#fde904] shadow-md py-[11px] px-[24px] rounded transition-all duration-[250ms] hover:bg-gray-200 dark:text-white dark:hover:bg-black'
					onClick={(e) => {
						setShowModal(true);
					}}
				>
					Log In/Register
				</Link>
			) : (
				<>
					<Link
						className='text-sm border-4 md:text-base md:border-2 border-[#fde904] shadow-md py-[11px] px-[29px] md:px-[24px] rounded transition-all duration-[250ms] hover:bg-gray-200 dark:text-white dark:hover:bg-black'
						to='/profile'
					>
						Profile
					</Link>
					<Link
						className='text-sm border-4 md:text-base md:mx-4 md:border-2 border-[#fde904] shadow-md py-[11px] px-[24px] rounded transition-all duration-[250ms] hover:bg-gray-200 dark:text-white dark:hover:bg-black'
						to='/projects'
					>
						Projects
					</Link>
					<button
						onClick={logOut}
						className='text-sm border-4 md:text-base md:mr-4 md:border-2 border-[#fde904] shadow-md py-[11px] px-[24px] rounded transition-all duration-[250ms] hover:bg-gray-200 dark:text-white dark:hover:bg-black'
					>
						Log Out
					</button>
				</>
			)}
		</div>
	);
};

export default NavLinks;
