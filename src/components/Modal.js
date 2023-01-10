import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../features/cart/CartSlice';
import { toggleModal } from '../features/modal/ModalSlice';
const Modal = () => {

  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>買い物かごをすべて空にしますか？</h4>
        <div className="btn-container">
          <button 
            className="btn confirm-btn" 
            onClick={() => {
              dispatch(clearCart());
              dispatch(toggleModal());
            }}
          >
            OK
          </button>
          <button 
            className="btn clear-btn"
            onClick={() => {
              dispatch(toggleModal());
            }}
          >
            やめとく
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
