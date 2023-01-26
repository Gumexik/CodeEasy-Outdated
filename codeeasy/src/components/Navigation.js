import logo from "../assets/logo.png";
import Modal from "./Modal";
import { useState } from "react";
import LearnBtn from "./LearnBtn";

const Navigation = () => {
    const [showModal, setShowModal] = useState(false);

    if (showModal === true) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }



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
            </div>
            {showModal && <Modal setShowModal={setShowModal} />}
        </header>
    );
};

export default Navigation;
