import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import { DataContext } from './DataContext'

function Card({data}) {
    const {view, setView} = useContext(DataContext)
    const {id, setId} = useContext(DataContext)
    const link = `/image/${data.image._id}`;
    return (
        <span>
            <h1>{data._id}</h1>
            <h2>{data.name}</h2>
            <h4>{data.location.city}, {data.location.state}</h4>
            <img src={data.image.thumbnail_url} />
            <Link to={link}>{link}</Link>
        </span>
    );
}

export default Card;
