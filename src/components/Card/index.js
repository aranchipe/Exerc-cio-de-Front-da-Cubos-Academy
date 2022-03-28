import './style.css'
import { useNavigate } from 'react-router-dom'

function Card({ card }) {
    const navigate = useNavigate()


    function handleSelectedCard() {
        navigate(`/teacher/${card.id}`)
    }

    return (
        <div
            onClick={() => handleSelectedCard()}
            className='container-card'>
            <img id='foto' src={card.avatar} />
            <span className='name'>{card.name}</span>
        </div>
    )
}

export default Card