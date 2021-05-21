import React, {useState, useContext, useEffect} from 'react';
import CollectionCards from './CollectionCards'

function Collections(props) {
    const [data, setData] = useState(null)

    //Home - Collection Cards 
    //Results - Collection Cards - /querystring    
    //Detail List/Map - Cards of a Collection - collection/:id
    //User - Collection Cards

    useEffect(() => {
        fetch(`http://localhost:4000/collections?detail=true`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return(      
            <div>
                {data ? <CollectionCards data={data}/>: "Loading..."}
            </div>        
    )
    }


export default Collections;
 