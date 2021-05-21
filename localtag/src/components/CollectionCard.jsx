import React, {useContext} from 'react';
import { Link } from 'react-router-dom'
import { DataContext } from './DataContext'

function CollectionCard({data}) {
    console.log(data.tag.name)
    const {view, setView} = useContext(DataContext)
    const {id, setId} = useContext(DataContext)
    const link = (data.tag.name ? `collections/${data._id}` : `image/${data.image._id}`) 
    return (
        <span>
            <h2>{data.name}</h2>
            <p>#{data.tag.name}</p>
            <h4>{data.location.city}, {data.location.state}</h4>
            <img src={data.image.thumbnail_url} />
            <Link to={link}>{link}</Link>
        </span>
    );
}

export default CollectionCard;

