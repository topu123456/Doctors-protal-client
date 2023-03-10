import React from 'react';

const ConfimationModal = ({ title, message, successButtonName, closeModal, successAction, modalData }) => {
    return (
        <div>

            <input type="checkbox" id="confimationModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label
                            onClick={() => successAction(modalData)}
                            htmlFor="confimationModal" className="btn">{successButtonName}
                        </label>
                        <button onClick={closeModal} className='btn btn-outline'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfimationModal;