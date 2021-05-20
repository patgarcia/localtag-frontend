import React, {useState, useEffect, useContext} from 'react';
import Card from './Card'

function Cards(props) {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/cards?detail=true')
            .then(res => res.json())
            .then(data => setCards(data))
            .catch(console.error)
    }, [])
    return (
        <div>
            {cards.map(card => {
                return <Card card={card} key={card._id}/>
            })}
        </div>
    );
}

export default Cards;
       