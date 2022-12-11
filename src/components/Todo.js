import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    // document.querySelector('button').addEventListener('click')
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function deleteHandler() {
        setModalIsOpen(true);
    }
    function closeModalHandler() {
        setModalIsOpen(false);
    }


    return (<div className="card">
        <h2>{props.title}</h2>
        <div className="actions">
            <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        {/* {modalIsOpen ? <div><Modal /><Backdrop /></div> : null} */}
        {/* shortcut method for ternary operator */}
        {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}

    </div>)
}
export default Todo;