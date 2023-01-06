import logo from "../assets/logo.png";

const Navigation = ({ setShowModal }) => {
    return (
        <header className='z-30 w-full px-2 py-4 bg-[#f3f4f6]'>
            <div className='flex md:flex-row flex-col items-center md:justify-between mx-auto max-w-7xl'>
                <a href='/' title='CodeEasy Home Page' className='flex items-center'>
                    <img src={logo} className='h-16' alt='CodeEasy logo' />
                    <span className='font-bold text-xl'>CodeEasy</span>
                </a>
                <div className='flex items-center my-4 space-x-1 md:my-0'>
                    <div className='flex items-center'>
                        <a
                            href='/login'
                            className='mx-4 border-2 border-[#fde904] shadow-md py-[11px] px-[24px] rounded transition-all duration-[250ms] hover:bg-gray-200'
                            onClick={(e) => { setShowModal(true); e.preventDefault() }}

                        >
                            Register/Log In
                        </a>
                    </div>
                    <a
                        href='/learn'
                        className='bg-[#fde904] border-2 border-amber-400 shadow text-center rounded py-[11px] px-[24px] relative group overflow-hidden'
                    >
                        <div className='absolute inset-0 w-2 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full'></div>
                        <span className='relative text-black group-hover:text-white group-hover:'>
                            Start Learning
                        </span>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navigation;
