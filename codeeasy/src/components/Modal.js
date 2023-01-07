import React, { useState } from "react";
import Login from "./Login";

const Modal = ({ setShowModal, showModal }) => {


    return (
        <div >{showModal && (<Login setShowModal={setShowModal} />)}</div>
        // <div>
        //     {showModal && (
        //         <div
        //             onClick={(e) => {
        //                 if (!e.target.closest(".modal")) {
        //                     setShowModal(false);
        //                 }
        //             }}
        //             className='absolute flex justify-center items-center h-screen w-screen top-0 left-0 bg-gray-500 bg-opacity-40 overflow-hidden'
        //         >
        //             <div className='modal h-[500px] w-[500px] bg-white flex rounded-md shadow-md'>
        //                 <form onSubmit={handleSubmit}>
        //                     <label htmlFor='username'>Username:</label>
        //                     <input
        //                         type='text'
        //                         id='username'
        //                         name='username'
        //                         onChange={handleInputChange}
        //                     />
        //                     <br />
        //                     <label htmlFor='email'>Email:</label>
        //                     <input
        //                         type='email'
        //                         id='email'
        //                         name='email'
        //                         onChange={handleInputChange}
        //                     />
        //                     <br />
        //                     <label htmlFor='password'>Password:</label>
        //                     <input
        //                         type='password'
        //                         id='password'
        //                         name='password'
        //                         onChange={handleInputChange}
        //                     />
        //                     <br />
        //                     <button type='submit'>Submit</button>
        //                 </form>
        //                 <button onClick={() => setShowModal(false)}>Close</button>
        //             </div>
        //         </div>
        //     )}
        // </div>
    );
};

export default Modal;
