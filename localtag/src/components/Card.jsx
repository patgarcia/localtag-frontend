import React, {useState, useEffect} from 'react';

function Card({card}) {
    const [image, setImage] = useState('[]')
    const [location, setLocation] = useState('[]')
    
    useEffect(() => {
        fetch('http://localhost:4000/images/' + card.image)
            .then(res => res.json())
            .then(data => setImage(data))
            .catch(console.error)
        fetch('http://localhost:4000/locations/' + card.location)
            .then(res => res.json())
            .then(data => setLocation(data))
            .catch(console.error)
    },[])
    
        
    return (
        <span>
            <h4>{location.city}, {location.state}</h4>
            <img src={image["thumbnail_url"]}></img> 
        </span>
    );
}

export default Card;