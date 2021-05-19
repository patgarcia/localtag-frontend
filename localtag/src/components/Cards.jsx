import React, {useState, useEffect} from 'react';
import Card from './Card'

function Cards(props) {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/cards')
            .then(res => res.json())
            .then(data => setCards(data))
            .catch(console.error)
    }, [])
    
    return (
        <div>
            {cards.map(card => {
                return <Card card={card}/>
            })}
        </div>
    );
}

export default Cards;
