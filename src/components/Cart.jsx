import React from 'react';
import "../styles/cart.css";
import {useDispatch, useSelector} from 'react-redux';
import {remove_from_cart} from '../Redux/action/index';
export const Cart = () => {

  const dispatch=useDispatch();
  const cart=useSelector((state)=>state.cartReducer.cartlist);
  const total = cart.reduce((total, currentValue) => total = total + currentValue.price,0);
  const total_price=total.toFixed(2);
  return (
  <>
  <section className="cart-container">
    
    <div className="head">Shopping Cart</div>

{
  cart.length===0?<div className='empty'>Cart is empty 😥 !</div>
  :
  <div className="cart-body">
<div className="product-cart">
      {
        cart.map((item)=>{
          return(
            <div className='cart-product-left' key={item.id}>
      <div className="product-image">
        <img src={item.image} alt={item.title} />
      </div>
       <div className="product-title">{item.title}</div>
       <div className="product-price">$ {item.price}</div>
       <div className="product-remove"><input className='btn-remove' type="button" value="Remove" onClick={()=>{dispatch(remove_from_cart(item.id))}} /></div>

            </div>
          )
        })
      }
    </div>

    <div className="checkout">
      <div className="coupon">
          <div className="coupon-text">Have coupon?</div>
          {/* <div className="coupon-body"> */}
            <input type="text" placeholder='Coupon code' />
            <input type="button" value="Apply" />
          {/* </div> */}
      </div>

      <div className="payout">
        <div className="payout-amt">
          <div className="total">Total price </div>
          <div className="price">${total_price}</div>
        </div>
        <div className="payout-amt">
          <div className="total">Discount</div>
          <div className="price">$ 0</div>
        </div>
        <div className="payout-amt">
          <div className="total">Total</div>
          <div className="price">$ {total_price}</div>
        </div>


        <input type="button" value="Checkout" />
      </div>
    </div>

</div>

}





       




  </section>
  </>
  );
};
