import React, {useState, useContext, useEffect} from 'react';
import Cards from './Cards'
import NewButton from './NewButton'
import {DataContext} from './DataContext'
import Collection from './Collection';

function Viewport({match, apiPath}) {
    const {view, setId} = useContext(DataContext)
    const [data, setData] = useState(null)

    //Home - Collection Cards 
    //Results - Collection Cards - /querystring    
    //Detail List/Map - Cards of a Collection - collection/:id
    //User - Collection Cards

    useEffect(() => {
        fetch(`http://localhost:4000/${apiPath}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return(      
            <div>
                {data ? <Cards data={data}/>: "Loading..."}
            </div>        
    )
    }


export default Viewport;
 