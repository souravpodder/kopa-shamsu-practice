import React from 'react';
import './Card.css';
import {BsFillCartFill} from 'react-icons/bs';

const Card = (props) => {
  // console.log(props);
  
  const {gunData, handleAddToCart} = props;
  const {img, name, price, bullet, capacity, action} = gunData;
  return (
    <div className='card'>
      <div className='image-container'>
        <img src={img} alt="" />  
      </div>

      <h2>{name}</h2>
      <div className="gun-inf0">
        <p>Bullet Type: {bullet}</p>
        <p>Capacity: {capacity}</p>
        <p>Action: {action}</p>

      </div>
      <div className='add-to-cart'>
        <button onClick={() => handleAddToCart(gunData)}><BsFillCartFill className='icon'/></button>
        <h1>${price}</h1>

      </div>
    </div>
  );
};

export default Card;