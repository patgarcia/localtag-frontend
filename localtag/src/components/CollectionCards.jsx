import React, {useState, useEffect, useContext} from 'react';
import CollectionCard from './CollectionCard'

function CollectionCards({data}) {

    return (
        <div>
            {data ? 
            (data.map(coll => {
                return <CollectionCard data={coll} key={coll._id}/>
            }))
            : "No data"}

            <h2>CARD IMAGES</h2>
        </div>
    );
}

export default CollectionCards;
       