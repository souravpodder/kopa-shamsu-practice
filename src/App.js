import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Cart from './Components/Cart/Cart';
import Navbar from './Components/Navbar/Navbar';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function App() {

  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


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
      <Navbar openModal= {openModal} cart={cart}/>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
        <button onClick={closeModal}>close</button>
          {
            cart.map(gun => <Cart key ={gun.id} gun = {gun}></Cart> )
          }

        </div>
      </Modal>

      

      <div className='card-container'>
        {
          guns.map(gun => <Card key={gun.id} gunData={gun} handleAddToCart={handleAddToCart}></Card>)
        }

      </div>
      
    </div>
  );
}

export default App;
