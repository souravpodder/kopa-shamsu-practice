import React from 'react';

const Cart = (props) => {
  console.log(props);
  const {name} = props.gun;

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Cart;