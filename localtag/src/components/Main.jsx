import React, {useState} from 'react';
import Viewport from './Viewport'
import LocalMap from './LocalMap'
import { Route, Switch } from 'react-router-dom' 
import DetailViewSwitch from './DetailViewSwitch';

function Main(props) {
    const [map, setMap] = useState(true)
 
    //Home - Collection Cards 
    //Results - Collection Cards - /querystring    
    //Detail List/Map - Cards of a Collection - collection/:id
    //User - Collection Cards
    return (
        <div>
        <DetailViewSwitch setMap={setMap}/>
        {
                
        map ? <LocalMap/> : 
        (
            <Route exact path="/" render={routerProps => <Viewport apiPath={"collections?detail=true"}/>}/>
        )

        }
        </div>
        
    );
}

export default Main;
