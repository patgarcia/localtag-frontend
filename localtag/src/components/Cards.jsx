import React, {useState, useEffect} from 'react';
import Card from './Card'
import { Grid } from '@material-ui/core';

function Cards(props) {
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/cards')
            .then(res => res.json())
            .then(data => setCards(data))
            .catch(console.error)
    }, [])
    
    return (
        <Grid container spacing ={2}>
            {cards.map(card => {
                return <Card card={card}/>
            })}
            <Grid item xs={false} sma={2} />
            <Grid item xs={12} sm={8} />
        </Grid>
    );
}

export default Cards;
