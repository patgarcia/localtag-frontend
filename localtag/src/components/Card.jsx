import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import { DataContext } from './DataContext'

function Card({card}) {
    const {view, setView} = useContext(DataContext)
    const {id, setId} = useContext(DataContext)
    return (
        <span>
            <h4>{card.location.city}, {card.location.state}</h4>
            <Link to={"/collection/" + card.collection_id} onClick={() => {
                setView('one')
                setId(card.collection_id)
            }}>
              <img src={card.image["thumbnail_url"]}></img>  
            </Link>
            
            <p>Votes: {card.vote_tally}</p> 
        </span>
    );
}

export default Card;
