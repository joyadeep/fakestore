import React from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {add_to_cart} from '../Redux/action/index';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/product.css";

export const Product = () => {

  const dispatch=useDispatch();
  let navigate=useNavigate();
  const changeroute=()=>{
    navigate("/cart");
  }
  const success=()=>toast.success("Added to cart !")
  const {id}=useParams();
  const product=useSelector((state)=>state.itemReducer.products.find(item=>item.id==id));
  const {title,description,price,image}=product;
  
  return <>
  <section className="product-container">
    <div className="product-detail-left">
    <img src={image} alt="product"/>
    </div>
    <div className="product-detail-right">
        <div className="title">{title}</div>
        <div className="description">{description}</div>
        <div className="price">$ {price}</div>
        <div className="buttons">
            <input className='buy-button' type="button" value="Buy Now" onClick={()=>{
              dispatch(add_to_cart(product));
              changeroute()}} />
            <input className='add-to-cart' onClick={()=>{
              dispatch(add_to_cart(product));
              success();
              }} type="button" value="Add to card" />
        </div>
    </div>
  </section>
    <ToastContainer autoClose={1500} />
  </>;
};
