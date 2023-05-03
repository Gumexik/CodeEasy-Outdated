import lessons from "../Lessons";

const SideNav = ({ setLesson, setCode, setDesc }) => {
	return (
		<div className=' md:h-[calc(100vh-96px)] dark:bg-gray-800  dark:text-white text-black '>
			<ul className='md:w-36 md:flex md:flex-col h-full dark:bg-gray-700 divide-y border-gray-500 dark:border-gray-300 border-t bg-[#f3f4f6] overflow-x-hidden md:overflow-y-scroll scrollbar-thin scrollbar-track-gray-500'>
				{lessons.lessons.map((lesson, i) => {
					return (
						<>
							<li className='md:py-4 h-10 px-2 text-sm' key={i}>
								<span
									onClick={() => {
										setLesson(lesson);
										setDesc(lesson.description);
										setCode(lesson.code);
									}}
									className='flex items-center md:justify-start justify-center w-full h-full md:hover:scale-[1.03] hover:text-yellow-600 dark:md:hover:text-gray-200  transition-scale duration-150 cursor-pointer focus:bg-gray-400'
								>
									{lesson.name}
								</span>
							</li>
							{lesson.subheading &&
								lesson.subheading.map((sub, idx) => (
									<li
										onClick={() => {
											setDesc(sub.desc);
											setCode(sub.code);
										}}
										key={idx}
										className='text-sm pl-6 py-1 md:hover:scale-[1.03] hover:text-yellow-600 dark:md:hover:text-gray-200  transition-scale duration-150 cursor-pointer focus:bg-gray-400'
									>
										{sub.name}
									</li>
								))}
						</>
					);
				})}
				<div
					onClick={() => {
						setCode(
							'<script>\n//Enter Javascript within Script Tags\nconsole.log("Hello from the console")\n</script>'
						);
						setDesc("You can play with your own code here.");
					}}
					className='bg-[#fde904] text-black text-center fixed bottom-0 w-36 h-12 flex items-center justify-center cursor-pointer'
				>
					<p className='bg-[#fde904] text-black font-bold'>Playground</p>
				</div>
			</ul>
		</div>
	);
};

export default SideNav;
