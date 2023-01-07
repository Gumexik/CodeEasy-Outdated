import Login from "./Login";

const Modal = ({ setShowModal, showModal }) => {

    return (
        <div >{showModal && (<Login setShowModal={setShowModal} />)}</div>
    );
};

export default Modal;
