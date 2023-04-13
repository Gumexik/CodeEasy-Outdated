import React from "react";

const DeleteProjectModal = ({ name, setDeleteModal, handleDelete }) => {
	return (
		<div className='absolute flex-col -top-15 z-50 flex items-center justify-center w-1/3 bg-gray-900 rounded-md pt-8 border border-white'>
			<p className='text-2xl pb-4 border-b'>
				Are you sure you want to delete project:
			</p>
			<p className='font-bold text-3xl'>{name}</p>

			<div className='w-1/2 flex justify-between'>
				<button
					onClick={() => {
						window.location.reload();
						handleDelete();
					}}
					className='bg-red-500 border-2 border-red-900 shadow-md text-center rounded py-[11px] px-[24px] relative group overflow-hidden my-10'
				>
					Delete
				</button>
				<button
					onClick={() => {
						setDeleteModal(false);
					}}
					className='bg-blue-500 border-2 border-blue-900 shadow-md text-center rounded py-[11px] px-[24px] relative group overflow-hidden my-10'
				>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default DeleteProjectModal;
