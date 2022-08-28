import React from 'react'
import './Modal.css'

const Modal = ({closeModal}) => {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="modal-title">
                <p>Card title (slug)</p>
                <button onClick={() => closeModal(false)}  className="titleCloseBtn"> X </button>
            </div>
            <div className="modal-body">
                <p>Modal Content</p>
                <p>Collections</p>
                <p>Author</p>
            </div>
            <div className="modal-footer">
                <button onClick={() => closeModal(false)}>Cancel</button>
                <button>Next</button>
            </div>
        </div>
    </div>
  )
}

export default Modal