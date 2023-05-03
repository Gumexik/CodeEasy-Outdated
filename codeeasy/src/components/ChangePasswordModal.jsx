const ChangePasswordModal = ({
	setPassword,
	setNewPassword,
	setRepeatPassword,
	setShowModal,
	handlePasswordChange,
	confirmPasswordChange,
	error,
}) => {
	return (
		<div className='md:h-[calc(100vh-96px)] w-screen absolute dark:bg-[#1f2937] bg-white'>
			<div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 h-96 w-96 dark:bg-[#111827] bg-[#f3f4f6] dark:text-white rounded-md border dark:border-black border-black'>
				<p className='text-center pt-4 text-xl mb-10'>Change Password</p>
				{error && (
					<p className='text-red-400 bg-red-200 p-2 text-center mx-2 rounded-md mb-3'>
						{error}
					</p>
				)}
				{confirmPasswordChange && (
					<p className='text-green-400 bg-green-200 p-2 text-center mx-2 rounded-md mb-3'>
						{confirmPasswordChange}
					</p>
				)}
				<form
					onSubmit={(e) => {
						e.preventDefault();
						handlePasswordChange();
					}}
					className='flex flex-col mx-10 gap-4 text-black'
				>
					<input
						type='password'
						className='py-2 rounded px-1'
						placeholder='Old Password'
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<input
						type='password'
						className='py-2 rounded px-1'
						placeholder='New Password'
						onChange={(e) => {
							setNewPassword(e.target.value);
						}}
					/>
					<input
						type='password'
						className='py-2 rounded px-1'
						placeholder='Repeat Password'
						onChange={(e) => {
							setRepeatPassword(e.target.value);
						}}
					/>
					<div className='flex gap-4 mx-auto mt-4'>
						<button className='px-4 py-2 bg-[#fde904] rounded-md'>
							Submit
						</button>
						<button
							onClick={() => {
								setShowModal(false);
							}}
							className='px-4 py-2 bg-gray-400 rounded-md'
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ChangePasswordModal;
