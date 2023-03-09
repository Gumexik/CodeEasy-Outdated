const Register = ({ setRegister, setShowModal }) => {
	return (
		<div className='relative flex flex-col justify-center w-3/4 min-h-screen overflow-hidden'>
			<div className=' dark:bg-black dark:border dark:border-gray-400 modal w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl'>
				<h1 className='text-3xl font-semibold text-center text-black dark:text-white'>
					Create account
				</h1>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						setShowModal(false);
					}}
					method='POST'
					className='mt-6'
				>
					<div className='mb-2'>
						<label
							for='username'
							className='block text-sm font-semibold text-gray-800 dark:text-white'
						>
							Username
						</label>
						<input
							for='username'
							name='username'
							className='block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-[#fde904] focus:ring-[#fde904] focus:outline-none focus:ring focus:ring-opacity-40'
						/>
					</div>
					<div className='mb-2'>
						<label
							for='email'
							className='block text-sm font-semibold text-gray-800 dark:text-white'
						>
							Email
						</label>
						<input
							type='email'
							name='email'
							className='block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-[#fde904] focus:ring-[#fde904] focus:outline-none focus:ring focus:ring-opacity-40'
						/>
					</div>
					<div className='mb-2'>
						<label
							type='password'
							className='block text-sm font-semibold text-gray-800 dark:text-white'
						>
							Password
						</label>
						<input
							type='password'
							name='password'
							className='block w-full px-4 py-2 mt-2 text-black bg-white border rounded-md focus:border-[#fde904] focus:ring-[#fde904] focus:outline-none focus:ring focus:ring-opacity-40'
						/>
						<label
							for='password'
							className='block text-sm py-2 font-semibold text-gray-800 dark:text-white'
						>
							Repeat password
						</label>
						<input
							type='password'
							name='repeat-password'
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
