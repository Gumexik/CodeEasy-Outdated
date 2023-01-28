const SideNav = () => {
    return (
        <div className='md:h-[calc(100vh-96px)] dark:bg-gray-800  dark:text-white text-black flex items-center'>
            <ul className='w-36 flex flex-col justify-center h-fit dark:bg-gray-900 rounded-r-xl shadow-xl border-t border-r border-b divide-y divide-gray-600 border-gray-600 bg-[#f3f4f6]'>
                <li className='h-12 px-2'>
                    <span className='flex items-center w-full h-full hover:scale-105 hover:text-blue-300 transition-scale duration-150 cursor-pointer'>
                        1. Variables
                    </span>
                </li>
                <li className='h-12 px-2'>
                    <span className='flex items-center w-full h-full hover:scale-105 hover:text-blue-300 transition-scale duration-150 cursor-pointer'>
                        2. Data Types
                    </span>
                </li>
                <li className='h-12 px-2'>
                    <span className='flex items-center w-full h-full hover:scale-105 hover:text-blue-300 transition-scale duration-150 cursor-pointer'>
                        3. Numbers</span>
                </li>
                <li className='h-12 px-2'>
                    <span className='flex items-center w-full h-full hover:scale-105 hover:text-blue-300 transition-scale duration-150 cursor-pointer'>
                        4. Strings</span>
                </li>
                <li className='h-12 px-2'>
                    <span className='flex items-center w-full h-full hover:scale-105 hover:text-blue-300 transition-scale duration-150 cursor-pointer'>
                        5. Boolean</span>
                </li>
                <li className='h-12 px-2'>
                    <span className='flex items-center w-full h-full hover:scale-105 hover:text-blue-300 transition-scale duration-150 cursor-pointer'>
                        6. Objects</span>
                </li>
                <li className='h-12 px-2'>
                    <span className='flex items-center w-full h-full hover:scale-105 hover:text-blue-300 transition-scale duration-150 cursor-pointer'>
                        7. Functions
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default SideNav;
