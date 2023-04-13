import { useState, useContext } from "react";
import axios from "axios";
import userContext from "../context/userContext";
import ErrorNotice from "./ErrorNotice";

export default function Login({ setRegister, setShowModal }) {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [error, setError] = useState();
	const { setUserData, setIsLoggedIn } = useContext(userContext);

	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		try {
			const loginUser = { email, password };
			const loginResponse = await axios.post(
				"http://localhost:5000/login",
				loginUser
			);
			setUserData({
				token: loginResponse.data.token,
				user: loginResponse.data.user,
			});
			localStorage.setItem("auth-token", loginResponse.data.token);
			setIsLoggedIn(true);
			setShowModal(false);
		} catch (err) {
			err.response.data.message && setError(err.response.data.message);
		}
	};

	return (
		<div className=' md:w-2/6 w-3/4 min-h-screen mt-8 overflow-hidden'>
			<div className='dark:bg-[#1f2937] dark:border dark:border-gray-400 modal w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl'>
				<div className='flex justify-between items-center pb-2'>
					<h1 className='text-xl md:text-2xl font-semibold text-black dark:text-white'>
						Sign in
					</h1>
					<button
						className='text-xl md:text-2xl dark:text-white'
						onClick={() => {
							setShowModal(false);
						}}
					>
						x
					</button>
				</div>
				{error && <ErrorNotice message={error} />}
				<form onSubmit={handleLoginSubmit} className='mt-4'>
					<div className='mb-2'>
						<label
							htmlFor='email'
							className='block text-sm font-semibold text-gray-800 dark:text-white'
						>
							Email
						</label>
						<input
							type='email'
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							className='block w-full px-4 py-1 mt-2 text-black bg-white border rounded-md focus:border-[#fde904] focus:ring-[#fde904] focus:outline-none focus:ring focus:ring-opacity-40'
						/>
					</div>
					<div className='mb-2'>
						<label
							htmlFor='password'
							className='block text-sm font-semibold text-gray-800 dark:text-white'
						>
							Password
						</label>
						<input
							type='password'
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							className='block w-full px-4 py-1 mt-2 text-black bg-white border rounded-md focus:border-[#fde904] focus:ring-[#fde904] focus:outline-none focus:ring focus:ring-opacity-40 '
						/>
					</div>
					<div className='mt-6 w-1/2 mx-auto'>
						<button
							type='submit'
							className='w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-[#fde904] rounded-md hover:bg-amber-300 focus:outline-none focus:bg-amber-400'
						>
							Login
						</button>
					</div>
				</form>

				<p className='mt-8 text-xs font-light text-center text-gray-700 dark:text-white'>
					{" "}
					Don't have an account?{" "}
					<button
						onClick={() => {
							setRegister(true);
						}}
						className='font-medium text-amber-600 hover:underline dark:text-amber-300'
					>
						Sign up
					</button>
				</p>
			</div>
		</div>
	);
}
