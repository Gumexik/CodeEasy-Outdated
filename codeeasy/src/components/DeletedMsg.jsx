const DeletedMsg = ({ message }) => {
	return (
		<div className='bg-red-600 text-white w-1/4 h-24 font-bold rounded mx-auto mt-6 flex items-center justify-center'>
			{message}
		</div>
	);
};

export default DeletedMsg;
