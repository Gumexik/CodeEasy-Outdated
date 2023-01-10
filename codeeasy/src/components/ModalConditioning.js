import Modal from "./Modal";

const ModalConditioning = ({ setShowModal, showModal }) => {
    if (showModal === true) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "unset";
    }

    return <div>{showModal && <Modal setShowModal={setShowModal} />}</div>;
};

export default ModalConditioning;
