function ErrorNotice(props) {
	return (
		<p className='bg-red-600 min-h-fit w-full text-black flex justify-between items-center rounded-lg p-4 my-4'>
			{props.message}
		</p>
	);
}
export default ErrorNotice;
