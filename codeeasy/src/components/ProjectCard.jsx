import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ name, id }) => {
	return (
		<Link
			to={`/project/${id}`}
			className='relative flex items-center justify-center w-64 h-44 rounded-md  border border-black dark:border-white dark:bg-gray-600 bg-gray-200'
		>
			<h3 className='text-xl'>{name}</h3>
			<button className='absolute top-0 right-0 p-3'>X</button>
		</Link>
	);
};

export default ProjectCard;
