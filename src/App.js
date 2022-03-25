import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Navbar from './Components/Navbar/Navbar';

function App() {

  const [guns, setGuns] = useState([]);

  useEffect(()=> {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setGuns(data))
  }, [])

  // console.log(guns);
  return (
    <div>
      <Navbar/>
      <div className='card-container'>
        {
          guns.map(gun => <Card key={gun.id} gunData={gun}></Card>)
        }

      </div>
      
    </div>
  );
}

export default App;
