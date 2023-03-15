function SuccessNotice(props) {
	return (
		<p className='bg-green-600 min-h-12 w-full text-black flex justify-between items-center rounded-lg p-4 my-4'>
			<span>{props.message}</span>
			<button onClick={props.clearError}>X</button>
		</p>
	);
}
export default SuccessNotice;
