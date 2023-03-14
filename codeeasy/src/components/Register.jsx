import { useState } from "react";
import { useContext } from "react";
import userContext from "../context/userContext";
import axios from "axios";
import ErrorNotice from "./ErrorNotice";

const Register = ({ setRegister, setShowModal }) => {
	const [password, setPassword] = useState("");
	const [repeatPassword, setrepeatPassword] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [error, setError] = useState();
	const { setUserData } = useContext(userContext);

	const handleRegisterSubmit = async (e) => {
		e.preventDefault();
		try {
			const newUser = { email, password, repeatPassword, username };
			await axios.post("http://localhost:5000/signup", newUser);
			const loginResponse = await axios.post("http://localhost:5000/login", {
				email,
				password,
			});
			setUserData({
				token: loginResponse.data.token,
				user: loginResponse.data.user,
			});
			localStorage.setItem("auth-token", loginResponse.data.token);
			window.location.reload(false);
		} catch (err) {
			err.response.data.message && setError(err.response.data.message);
		}
	};

	return (
		<div className='relative flex flex-col justify-center w-3/4 min-h-screen overflow-hidden'>
			<div className=' dark:bg-black dark:border dark:border-gray-400 modal w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl'>
				<h1 className='text-3xl font-semibold text-center text-black dark:text-white'>
					Create account
				</h1>
				{error && (
					<ErrorNotice message={error} clearError={() => setError(undefined)} />
				)}
				<form onSubmit={handleRegisterSubmit} className='mt-6'>
					<div className='mb-2'>
						<label
							htmlFor='username'
							className='block text-sm font-semibold text-gray-800 dark:text-white'
						>
							Username
						</label>
						<input
							htmlFor='username'
							onChange={(e) => {
								setUsername(e.target.value);
							}}
							className='block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-[#fde904] focus:ring-[#fde904] focus:outline-none focus:ring focus:ring-opacity-40'
						/>
					</div>
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
							className='block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-[#fde904] focus:ring-[#fde904] focus:outline-none focus:ring focus:ring-opacity-40'
						/>
					</div>
					<div className='mb-2'>
						<label
							type='password'
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
							className='block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-[#fde904] focus:ring-[#fde904] focus:outline-none focus:ring focus:ring-opacity-40'
						/>
						<label
							htmlFor='Repeat Password'
							className='block text-sm py-2 font-semibold text-gray-800 dark:text-white'
						>
							Repeat password
						</label>
						<input
							type='password'
							onChange={(e) => {
								setrepeatPassword(e.target.value);
							}}
							className='block w-full px-4 py-2 text-black bg-white border rounded-md focus:border-[#fde904] focus:ring-[#fde904] focus:outline-none focus:ring focus:ring-opacity-40'
						/>
					</div>
					<div className='mt-12'>
						<button
							type='submit'
							className='w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-[#fde904] rounded-md hover:bg-amber-300 focus:outline-none focus:bg-amber-400'
						>
							Register
						</button>
					</div>
				</form>

				<p className='mt-8 text-xs font-light text-center text-gray-700 dark:text-white'>
					{" "}
					Already have an account?{" "}
					<button
						onClick={() => {
							setRegister(false);
						}}
						className='font-medium text-amber-600 hover:underline dark:text-amber-300'
					>
						Sign In
					</button>
				</p>
			</div>
		</div>
	);
};

export default Register;
