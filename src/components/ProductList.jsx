import React, { useEffect } from 'react';
import {fetch_all_products} from '../Redux/action/index';
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import "../styles/productlist.css";

export const ProductList = () => {
  const products=useSelector((state)=>state.itemReducer.products);
  const dispatch=useDispatch();
 
  useEffect(()=>{
    dispatch(fetch_all_products());
   
  },[dispatch])

  

  return <>

  <section className="allproducts">
      {
        products.map((item)=>{
          return(
            <div className='product' key={item.id}>
              <Link to={`/product/${item.id}`} style={{textDecoration:"none"}}>
                <img src={item.image} alt="product"/>
                <div className="title">{item.title}</div>
                <div className="price">$ {item.price}</div>
                </Link>     
            </div>      
          )
        })
      }
  </section>
  </>;
};
