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
	const { setUserData, setIsLoggedIn } = useContext(userContext);

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
			setShowModal(false);
			setIsLoggedIn(true);
		} catch (err) {
			err.response.data.message && setError(err.response.data.message);
		}
	};

	return (
		<div className='w-3/4 md:w-2/6 min-h-screen overflow-hidden mt-8'>
			<div className=' dark:bg-[#1f2937] dark:border dark:border-gray-400 modal w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl'>
				<div className='flex justify-between items-center'>
					<h1 className='text-xl md:text-2xl font-semibold text-black dark:text-white'>
						Register new account
					</h1>
					<button
						className='text-2xl dark:text-white'
						onClick={() => {
							setShowModal(false);
						}}
					>
						x
					</button>
				</div>
				{error && (
					<ErrorNotice message={error} clearError={() => setError(undefined)} />
				)}
				<form onSubmit={handleRegisterSubmit} className='mt-4'>
					<div className='mb-2'>
						<label
							htmlFor='username'
							className='block text-sm font-semibold text-gray-800 dark:text-white'
						>
							Username
						</label>
						<input
							htmlFor='username'
							placeholder='Username'
							onChange={(e) => {
								setUsername(e.target.value);
							}}
							className='block w-full px-4 py-1 mt-1 text-black bg-white border rounded-md focus:border-[#fde904] focus:ring-[#fde904] focus:outline-none focus:ring focus:ring-opacity-40'
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
							placeholder='Email'
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							className='block w-full px-4 py-1 mt-1 text-black bg-white border rounded-md focus:border-[#fde904] focus:ring-[#fde904] focus:outline-none focus:ring focus:ring-opacity-40'
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
							placeholder='Password'
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							className='block w-full px-4 py-1 mt-1 text-black bg-white border rounded-md focus:border-[#fde904] focus:ring-[#fde904] focus:outline-none focus:ring focus:ring-opacity-40'
						/>
					</div>
					<div className='mb-2'>
						<label
							type='password'
							htmlFor='Repeat Password'
							className='block text-sm font-semibold text-gray-800 dark:text-white'
						>
							Repeat password
						</label>
						<input
							type='password'
							placeholder='Repeat password'
							onChange={(e) => {
								setrepeatPassword(e.target.value);
							}}
							className='block w-full px-4 py-1 text-black bg-white border rounded-md focus:border-[#fde904] focus:ring-[#fde904] focus:outline-none focus:ring focus:ring-opacity-40'
						/>
					</div>
					<div className='mt-6 mx-auto w-1/2'>
						<button
							type='submit'
							className='w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-[#fde904] rounded-md hover:bg-amber-300 focus:outline-none focus:bg-amber-400'
						>
							Register
						</button>
					</div>
				</form>

				<p className='mt-4 text-xs font-light text-center text-gray-700 dark:text-white'>
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
				<p className='text-center text-xs dark:text-white text-gray-700 mt-6'>
					By creating a new account you accept our{" "}
					<a href='/terms' className='text-[#fde904]'>
						Terms and Conditions
					</a>
				</p>
			</div>
		</div>
	);
};

export default Register;
