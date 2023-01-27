import logo from "../assets/logo.png";
import theme_img from "../assets/theme.png"
import Modal from "./Modal";
import { useState, useEffect } from "react";
import LearnBtn from "./LearnBtn";

const Navigation = () => {
    const [showModal, setShowModal] = useState(false);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    if (showModal === true) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }

    return (
        <header className='z-30 w-full px-10 py-4 bg-[#f3f4f6] dark:bg-gray-900 relative'>
            <div className='flex md:flex-row flex-col md:justify-between mx-auto max-w-7xl'>
                <a href='/' title='CodeEasy Home Page' className='flex items-center ml-4'>
                    <img src={logo} className='h-16' alt='CodeEasy logo' />
                    <span className='font-bold text-xl dark:text-white'>CodeEasy</span>
                </a>
                <div className='flex items-center justify-center my-4 space-x-1 md:my-0'>
                    <div className='flex items-center'>
                        <a
                            href='/login'
                            className='text-sm md:text-base mx-4 border-2 border-[#fde904] shadow-md py-[11px] px-[24px] rounded transition-all duration-[250ms] hover:bg-gray-200 dark:text-white dark:hover:bg-black'
                            onClick={(e) => {
                                setShowModal(true);
                                e.preventDefault();
                            }}
                        >
                            Log In/Register
                        </a>
                    </div>
                    <LearnBtn />
                </div>
                <button className='absolute right-12 p-2 dark:bg-white rounded-md border border-black' onClick={handleThemeSwitch}>
                    <img src={theme_img} alt="dark/light mode theme" className="w-9" />
                </button>
            </div>
            {showModal && <Modal setShowModal={setShowModal} />}
        </header>
    );
};

export default Navigation;
