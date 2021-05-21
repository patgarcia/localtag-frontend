import React, {useState, useContext, useEffect} from 'react';
import Cards from './Cards'
import NewButton from './NewButton'
import {DataContext} from './DataContext'
import Collection from './Collection';

function Viewport({match, apiPath}) {
    console.log(`http://localhost:4000/${apiPath}${match ? match.params.id : ''}`)
    const [data, setData] = useState(null)

    //Home - Collection Cards 
    //Results - Collection Cards - /querystring    
    //Detail List/Map - Cards of a Collection - collection/:id
    //User - Collection Cards

    useEffect(() => {
        console.log("FETCHING", `http://localhost:4000/${apiPath}${match ? match.params.id : ''}?detail=true`)
        fetch(`http://localhost:4000/${apiPath}${match ? match.params.id : ''}?detail=true`)
            .then(res => res.json())
            .then(data => setData([].concat(data)))
    }, [])

    return(      
            <div>
                {data ? <Cards data={data}/>: "Loading..."}
            </div>        
    )
    }


export default Viewport;
 