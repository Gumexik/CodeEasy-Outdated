import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import DeleteProjectModal from "./DeleteProjectModal";
import userContext from "../context/userContext";
import axios from "axios";

const ProjectCard = ({ name, id }) => {
	const { userData } = useContext(userContext);
	const [deleteModal, setDeleteModal] = useState(false);

	const handleDelete = async () => {
		try {
			const token = userData.token;
			const DeleteProject = await axios.delete(
				`http://localhost:5000/user/project/${id}`,
				{
					headers: {
						"x-auth-token": token,
					},
				}
			);

			DeleteProject();
		} catch (err) {
			return err.response.data.message;
		}
	};

	return (
		<>
			{deleteModal && (
				<DeleteProjectModal
					name={name}
					setDeleteModal={setDeleteModal}
					handleDelete={handleDelete()}
				/>
			)}
			<Link
				to={`/project/${id}`}
				className='relative flex items-center justify-center w-64 h-44 rounded-md  border border-black dark:border-white dark:bg-gray-600 dark:hover:bg-gray-500 bg-gray-200 overflow-hidden transition duration-200'
			>
				<h3 className='text-xl'>{name}</h3>
				<FontAwesomeIcon
					onClick={(e) => {
						setDeleteModal(true);
						e.preventDefault();
					}}
					icon={faTrash}
					className='absolute top-0 right-0 p-4 bg-red-500 rounded-bl-md text-white border-l border-b border-black hover:bg-red-700'
				/>
			</Link>
		</>
	);
};

export default ProjectCard;
