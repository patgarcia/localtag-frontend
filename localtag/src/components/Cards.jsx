import React from 'react';
import Card from './Card'

function Cards(props) {
    const cards = 'http://localhost:4000/cards'
        fetch(cards)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(console.error)
    return (
        <div>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}

export default Cards;