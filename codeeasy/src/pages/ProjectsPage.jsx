import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import userContext from "../context/userContext";
import axios from "axios";

function ProjectPage() {
	const { userData } = useContext(userContext);
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		const token = userData.token;
		try {
			const getUserProjects = async () => {
				const data = await axios.get("http://localhost:5000/user/projects", {
					headers: {
						"x-auth-token": token,
					},
				});
				setProjects(data.data);
			};
			getUserProjects();
		} catch (err) {
			return err.response.data.message;
		}
	}, [userData.token]);

	return (
		<>
			<Navigation />
			<div className='md:min-h-[calc(100vh-96px)] dark:text-white md:px-36'>
				<div className='flex justify-between items-center my-12 h-fit md:flex-row flex-col gap-6'>
					<h4 className='font-bold text-2xl'>Your Projects</h4>
					<Link to='/newproject'>
						<button className='bg-[#fde904] border-2 border-amber-400 shadow-md text-center rounded py-[11px] px-[24px] group overflow-hidden text-black hover:bg-amber-400'>
							Create New
						</button>
					</Link>
				</div>
				<div className='flex gap-12 flex-wrap mb-12 justify-center overflow-hidden'>
					{projects.map((project, id) => (
						<ProjectCard key={id} name={project.name} />
					))}
				</div>
			</div>
			<Footer />
		</>
	);
}

export default ProjectPage;
