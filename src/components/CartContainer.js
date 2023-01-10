import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../features/cart/CartSlice';
import { toggleModal } from '../features/modal/ModalSlice';

const CartContainer = () => {
  const dispatch = useDispatch();

  const  { amount, cartItems, total }  = useSelector((state) => state.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>買い物かご</h2>
          <h4 className="empty-cart">何も入っていません sorry</h4>
        </header>
      </section>
    );
  };

  return (
    <section className="cart">
      <header>
        <h2>買い物かご</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            合計 <span>{total}円</span>
          </h4>
        </div>
        <button 
          className="btn clear-btn"
          onClick={() => dispatch(toggleModal())}  
        >
          全削除
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
