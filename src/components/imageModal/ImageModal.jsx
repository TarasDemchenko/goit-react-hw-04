import Modal from "react-modal";
import s from "./ImageModal.module.css";
Modal.setAppElement("#root");
const ImageModal = ({ modalIsOpen, openModal, closeModal }) => {
  return (
    <div>
      <button onClick={openModal}></button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={s.modal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
};

export default ImageModal;
