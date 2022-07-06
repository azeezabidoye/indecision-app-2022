import React from "react";
import Modal from 'react-modal';

const OptionModal = (props) => {
    return (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel='option modal'
        closeTimeoutMS={200}
        className="modal"
    >
        {props.selectedOption && <h2 className="modal--text">{props.selectedOption}</h2>}
        <button onClick={props.closeModal} className="buttonSmall">Close</button>
    </Modal>
    )
}

export default OptionModal;