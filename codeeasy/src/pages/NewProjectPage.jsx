import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

function NewProjectPage() {
	return (
		<>
			<Navigation />
			<div className='md:min-h-[calc(100vh-96px)] dark:text-white md:px-36'>
				<div className='flex justify-between items-center my-12 h-fit'>
					<h4 className='font-bold text-2xl'>Your Projects</h4>
					<Link to='/newproject'>
						<button className='bg-[#fde904] border-2 border-amber-400 shadow-md text-center rounded py-[11px] px-[24px] group overflow-hidden text-black hover:bg-amber-400'>
							Create New
						</button>
					</Link>
				</div>
				<div className='flex gap-12 flex-wrap mb-12 justify-between'>
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default NewProjectPage;
