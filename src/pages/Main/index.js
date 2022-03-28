import './styles.css';
import cards from '../../data'
import { useState } from 'react';
import Card from '../../components/Card'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

function Main() {
  const [stateCards, setStateCards] = useState([...cards])
  return (
    <div className='container-main'>
      <img id='logo' src={logo} />
      <div className='cards'>
        {stateCards.map((item) => (
          <Card
            key={item.id}
            card={item}
            stateCards={stateCards}
            setStateCards={setStateCards}
          />
        ))}
      </div>

    </div>
  );
}

export default Main;