import React from 'react';
import {TiShoppingCart} from 'react-icons/ti';
import { Link } from 'react-router-dom';
import '../styles/header.css';

export const Header = () => {
  return <>
  <section className="header">
    <div className="name">
      <Link to="/fakestore" style={{textDecoration:"none",color:"white"}}>
    FakeStore
      </Link>
    </div>
    <div className="cart">
    <Link to="/cart" style={{color:"white"}}><TiShoppingCart/></Link>
    </div>
  </section>
  </>;
};
