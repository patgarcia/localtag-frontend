import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from './DataContext';


function Collection({id}) {
    const [coll, setColl] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/collections?detail=true')
            .then(res => res.json())
            .then(res => console.log(res))
            .then(data => setColl(data))
            .catch(console.error)
    }, [])

    return (
        <div>
            <h1>One Collection</h1>
        </div>
    );
}

export default Collection;