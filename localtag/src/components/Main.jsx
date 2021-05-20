import React, {useState} from 'react';
import Collection from './Collection'
import Viewport from './Viewport'
import LocalMap from './LocalMap'
import Collections from './Collections'
import { Route, Switch } from 'react-router-dom' 
import DetailViewSwitch from './DetailViewSwitch';
import Image from './Image'

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
            <div>
                <Route exact path="/" component={Collections}/>
                <Route exact path="/collections/:id" render={routerProps => <Collection apiPath={"collections/"} match={routerProps.match}/>}/>
                <Route exact path="/image/:id" render={routerProps => <Image match={routerProps.match}/>} />
            </div>

        )

        }
        </div>
        
    );
}

export default Main;
