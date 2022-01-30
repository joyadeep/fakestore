import React, { useEffect } from 'react';
import {fetch_all_products} from '../Redux/action/index';
import Skeleton from 'react-loading-skeleton'
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import "../styles/productlist.css";
import 'react-loading-skeleton/dist/skeleton.css'
import { useState } from 'react';

export const ProductList = () => {
  const[loading,setLoading]=useState(true);
  const products=useSelector((state)=>state.itemReducer.products);
  const dispatch=useDispatch();
 
  useEffect(()=>{
      dispatch(fetch_all_products());
      // products.length>0 && setLoading(false)
  },[dispatch])

  

  return <>
  {
    console.log(`length : ${products.length} loading: ${loading}`)
}



  <section className="allproducts">
    {/* <Skeleton height={40}/> */}
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
