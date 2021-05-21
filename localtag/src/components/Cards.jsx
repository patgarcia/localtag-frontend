import React, {useState, useEffect, useContext} from 'react';
import Card from './Card'

function Cards({data}) {

    return (
        <div>
            {data ? 
            (data.map(coll => {
                return <Card card={coll} key={coll._id}/>
            }))
            : "No data"}
        </div>
    );
}

export default Cards;
       