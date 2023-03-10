import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Modal = ({ setShowModal }) => {
	const [register, setRegister] = useState(false);

	return (
		<div
			onClick={(e) => {
				if (!e.target.closest(".modal")) {
					setShowModal(false);
				}
			}}
			className='z-50 absolute flex justify-center items-center h-screen w-screen top-0 left-0 bg-gray-900 bg-opacity-80 overflow-hidden'
		>
			{!register ? (
				<Login setShowModal={setShowModal} setRegister={setRegister} />
			) : (
				<Register setShowModal={setShowModal} setRegister={setRegister} />
			)}
		</div>
	);
};

export default Modal;
