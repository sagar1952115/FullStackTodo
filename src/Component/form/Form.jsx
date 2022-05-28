import { React } from "react";
import { IoMdAddCircle } from "react-icons/io";
import Modal from "../../Component/modal/Modal";
import "./Form.css";

const Form = ({ setModal, modal, setEditTodo, editTodo }) => {
  return (
    <div>
      <div className="apps">
        <IoMdAddCircle className="AddModal" onClick={() => setModal(true)} />
      </div>
      {modal && <Modal setModal={setModal} />}
    </div>
  );
};

export default Form;
