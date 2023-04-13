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
			className=' flex w-full justify-center dark:bg-gray-900 overflow-hidden'
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
