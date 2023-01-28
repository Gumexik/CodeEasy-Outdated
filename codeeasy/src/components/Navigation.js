import logo from "../assets/logo.png";
import theme_dark from "../assets/theme.png"
import theme_light from "../assets/theme_white.png"
import Modal from "./Modal";
import { useState, useEffect } from "react";
import LearnBtn from "./LearnBtn";

const Navigation = () => {
    const localTheme = localStorage.getItem("Mode")


    const [showModal, setShowModal] = useState(false);
    const [theme, setTheme] = useState(localTheme);

    useEffect(() => {
        localStorage.setItem("Mode", theme)

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
        <header className='z-30 w-full md:px-32 px-10 py-4 bg-[#f3f4f6] dark:bg-gray-900 relative drop-shadow-md dark:drop-shadow-[0_4px_3px_rgba(255,255,255,0.05)]'>
            <div className='flex md:flex-row flex-col md:justify-between mx-auto max-w-7xl'>
                <a href='/' title='CodeEasy Home Page' className='flex items-center ml-4'>
                    <img src={logo} className='h-16' alt='CodeEasy logo' />
                    <span className='font-bold text-xl dark:text-white'>CodeEasy</span>
                </a>
                <div className='flex items-center justify-center my-4 space-x-1 md:my-0'>
                    <div className='flex items-center'>
                        <a
                            href='/login'
                            className='text-sm border-4 md:text-base mx-4 md:border-2 border-[#fde904] shadow-md py-[11px] px-[24px] rounded transition-all duration-[250ms] hover:bg-gray-200 dark:text-white dark:hover:bg-black'
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
                <button className='absolute right-12 md:top-5 p-2 dark:bg-transparent dark:border-white rounded-md border border-black' onClick={handleThemeSwitch}>
                    <img src={theme === "dark" ? theme_light : theme_dark} alt="dark/light mode switch" className="w-9" />
                </button>
            </div>
            {showModal && <Modal setShowModal={setShowModal} />}
        </header>
    );
};

export default Navigation;
