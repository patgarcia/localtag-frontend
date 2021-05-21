import React, {useState, useEffect, useContext} from 'react';
import Card from './Card'

function Cards({collec}) {
    const [cards, setCards] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/cards/collection/${collec._id}?detail=true`)
        .then(res => res.json())
        .then(res => setCards(res))
        
    }, [])

    return (
        <div>
            <h1>{ collec.name }</h1>
            {cards ? 
            (cards.map(card => {
                return <Card data={card} key={card._id}/>
            }))
            : "No data"}

            <h2>CARD IMAGES</h2>
        </div>
    );
}

export default Cards;
       