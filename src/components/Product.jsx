import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import "../styles/product.css";

export const Product = () => {
  
  const {id}=useParams();
  const product=useSelector((state)=>state.cartReducer.products.find(item=>item.id==id));
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
            <input className='buy-button' type="button" value="Buy Now" />
            <input className='add-to-cart' type="button" value="Add to card" />
        </div>
    </div>
  </section>
  </>;
};
