import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import { DataContext } from './DataContext'

function Card({card}) {
    const {view, setView} = useContext(DataContext)
    const {id, setId} = useContext(DataContext)
    return (
        <span>
            <h2>{card.name}</h2>
            <p>#{card.tag.name}</p>
            <h4>{card.location.city}, {card.location.state}</h4>
        </span>
    );
}

export default Card;
