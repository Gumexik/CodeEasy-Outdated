import { useState } from "react";

export default function Login({ setShowModal, setRegister }) {
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const handleLoginSubmit = () => {
		fetch("http://localhost:5000/login", {
			method: "POST",
			body: JSON.stringify({
				email: email,
				password: password,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
	};

	return (
		<div className='relative flex flex-col justify-center w-3/4 min-h-screen overflow-hidden'>
			<div className='dark:bg-black dark:border dark:border-gray-400 modal w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl'>
				<h1 className='text-3xl font-semibold text-center text-black dark:text-white'>
					Sign in
				</h1>
				<form
					onSubmit={(e) => {
						setShowModal(false);
						handleLoginSubmit();
					}}
					className='mt-6'
				>
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
							className='block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-[#fde904] focus:ring-[#fde904] focus:outline-none focus:ring focus:ring-opacity-40 '
						/>
					</div>
					<div className='mt-12'>
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
