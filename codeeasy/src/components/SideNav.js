import { lessons } from "../Lessons";

const SideNav = ({ setLesson }) => {
	return (
		<div className='md:h-[calc(100vh-96px)] dark:bg-gray-800  dark:text-white text-black md:flex items-center'>
			<ul className='md:w-36 md:flex md:flex-col justify-center h-fit dark:bg-gray-900 md:rounded-r-xl shadow-xl border-t border-r border-b divide-y divide-gray-600 border-gray-600 bg-[#f3f4f6]'>
				{lessons.map((lesson, i) => {
					return (
						<li className='md:h-12 h-10 md:px-2' key={i}>
							<span
								onClick={() => {
									setLesson(lesson);
								}}
								className='flex items-center md:justify-start justify-center w-full h-full md:hover:scale-105 md:hover:text-blue-300 transition-scale duration-150 cursor-pointer focus:bg-gray-400'
							>
								{lesson.name}
							</span>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default SideNav;
