import { useContext, useState, useEffect } from "react";
import userContext from "../context/userContext";
import axios from "axios";
import ErrorNotice from "./ErrorNotice";

const NewProjectModal = ({ showModal, setShowModal }) => {
	const { userData } = useContext(userContext);
	const [projectName, setProjectName] = useState("");
	const [errorVisible, setErrorVisible] = useState(false);
	const [error, setError] = useState("");

	const handleClick = (e) => {
		if (!e.target.closest(".modal")) {
			setShowModal(false);
		}
	};

	if (showModal === true) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "unset";
	}

	const handleProjectSave = async () => {
		try {
			const newProject = { projectName };
			const token = userData.token;
			const newProjectResponse = await axios.post(
				"http://localhost:5000/user/newProject",
				newProject,
				{
					headers: {
						"x-auth-token": token,
					},
				}
			);
			window.location.reload(false);
			newProjectResponse();
		} catch (err) {
			err.response.data.message && setError(err.response.data.message);
			setErrorVisible(true);
			console.log(err.response.data.message);
		}
	};

	useEffect(() => {
		let errorMessageTimeout = setTimeout(() => {
			setErrorVisible(false);
		}, 3000);

		return () => {
			clearTimeout(errorMessageTimeout);
		};
	}, [errorVisible]);

	return (
		<div
			onClick={handleClick}
			className=' z-50 absolute flex justify-center items-center h-screen w-screen top-0 left-0 bg-gray-900 bg-opacity-80 overflow-hidden'
		>
			<div className='modal rounded-md border border-gray-600 h-42 w-fit p-20 dark:bg-gray-800 dark:text-white tracking-wide flex flex-col gap-8'>
				<div>
					{errorVisible && (
						<ErrorNotice message={error} clearError={() => setError(error)} />
					)}
				</div>
				<label
					htmlFor='New Project Name'
					className='text-center font-bold text-xl'
				>
					Create new project
				</label>
				<input
					type='text'
					required
					placeholder='Enter new project name here'
					className='p-4 rounded w-72 text-black'
					onChange={(e) => {
						setProjectName(e.target.value);
					}}
				/>
				<button
					onClick={handleProjectSave}
					className='px-4 py-2 text-black bg-[#fde904] border-2 border-amber-400 rounded-md hover:bg-amber-400'
				>
					Save
				</button>
			</div>
		</div>
	);
};

export default NewProjectModal;
