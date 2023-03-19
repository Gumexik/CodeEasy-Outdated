import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { useContext, useState, useEffect } from "react";
import userContext from "../context/userContext";
import axios from "axios";
import NewProjectModal from "../components/NewProjectModal";

function ProjectPage() {
	const { userData } = useContext(userContext);
	const [projects, setProjects] = useState([]);
	const [showModal, setShowModal] = useState(false);

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
			{showModal && (
				<NewProjectModal setShowModal={setShowModal} showModal={showModal} />
			)}
			<div className='md:min-h-[calc(100vh-96px)] dark:text-white md:mx-auto md:max-w-7xl'>
				<div className='flex justify-between items-center my-12 h-fit md:flex-row flex-col gap-6'>
					<h4 className='font-bold text-2xl'>Your Projects</h4>
					<button
						onClick={() => {
							setShowModal(true);
						}}
						className='bg-[#fde904] border-2 border-amber-400 shadow-md text-center rounded py-[11px] px-[24px] group overflow-hidden text-black hover:bg-amber-400'
					>
						Create New
					</button>
				</div>
				<div className='flex gap-8 flex-wrap mb-12 justify-center overflow-hidden'>
					{!projects && (
						<p>
							You don't have any projects yet, create one by clicking on "Create
							New" button
						</p>
					)}

					{projects.map((project, id) => (
						<ProjectCard key={id} name={project.name} id={project._id} />
					))}
				</div>
			</div>
			<Footer />
		</>
	);
}

export default ProjectPage;
