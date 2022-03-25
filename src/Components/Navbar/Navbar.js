import './Navbar.css';
import React from 'react';
import {BsFillCartFill} from 'react-icons/bs';



const Navbar = (props) => {
  const {openModal, cart} = props;
  return (
    <div className='navbar'>
      <h1>koma shamsu store</h1>
      
      <div className='cart-counter' onClick={openModal}>
        <span>{cart.length}</span>
        <BsFillCartFill className="icon" color='fff'/>

      </div>

    </div>
  );
};

export default Navbar;