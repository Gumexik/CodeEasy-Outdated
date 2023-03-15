import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ name }) => {
	return (
		<div className='w-48 h-64 rounded-md overflow-hidden'>
			<Link to='#'>
				<h3 className='flex justify-center items-center text-xl dark:bg-gray-600 bg-gray-200 h-32 rounded-md'>
					{name}
				</h3>
			</Link>
		</div>
	);
};

export default ProjectCard;
