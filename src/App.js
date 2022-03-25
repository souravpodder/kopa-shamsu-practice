import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';

function App() {

  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (gunData) => {
    // console.log(gunData);
    // const {name} = gunData;
    const newCart = [...cart, gunData];
    setCart(newCart);
  }

  // console.log(cart);
  useEffect(()=> {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setGuns(data))
  }, [])

  // console.log(guns);
  return (
    <div>
      <Navbar/>

      {
        cart.map(gun => <Cart key ={gun.id} gun = {gun}></Cart> )
      }
      <div className='card-container'>
        {
          guns.map(gun => <Card key={gun.id} gunData={gun} handleAddToCart={handleAddToCart}></Card>)
        }

      </div>
      
    </div>
  );
}

export default App;
