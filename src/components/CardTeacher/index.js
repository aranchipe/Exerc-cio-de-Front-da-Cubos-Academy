import './style.css'
import array from '../../data'
import { useState } from 'react'

function CardTeacher({ id }) {
    const [stateArray, setStateArray] = useState([...array])
    const currentCard = stateArray.find((item) => {
        return item.id === Number(id)
    })
    return (
        <div className='card-teacher'>
            <img id='foto-bio' src={currentCard.avatar} />
            <span className='nome-bio'>{currentCard.name}</span>
            <span className='stack-bio'>{currentCard.stack}</span>
            <div className='linha'></div>
            <h3>Bio</h3>
            <div className='bio'>
                <p>{currentCard.bio}</p>
            </div>



        </div>
    )
}

export default CardTeacher