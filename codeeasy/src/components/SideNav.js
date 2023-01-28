import { lessons } from "../Lessons";

const SideNav = ({ setLesson }) => {



    return (
        <div className='md:h-[calc(100vh-96px)] dark:bg-gray-800  dark:text-white text-black flex items-center'>
            <ul className='w-36 flex flex-col justify-center h-fit dark:bg-gray-900 rounded-r-xl shadow-xl border-t border-r border-b divide-y divide-gray-600 border-gray-600 bg-[#f3f4f6]'>
                {lessons.map((lesson, i) => {
                    return <li className='h-12 px-2' key={i}>
                        <span
                            onClick={() => { setLesson(lesson) }}
                            className='flex items-center w-full h-full hover:scale-105 hover:text-blue-300 transition-scale duration-150 cursor-pointer'>
                            {lesson.name}
                        </span>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default SideNav;
