import React, {useState, useContext} from 'react';
import Cards from './Cards'
import NewButton from './NewButton'
import {DataContext} from './DataContext'
import Collection from './Collection';

function Viewport({match}) {
    const {view, setId} = useContext(DataContext)
    return(
            <div>
                <Cards/>
                { view == 'all' ? <NewButton/> : <Collection id={match.params.id}/> }
            </div>        
    )
    // if(view === 'all'){
    //     return (
    //         <div>
    //             <Cards/>
    //             <NewButton/>
    //         </div>
    //     ); 
    // }
    // else if(view === 'one'){
    //     return (
    //         <div>
                // <Collection id={match.params.id}/>
    //             <NewButton/>
    //         </div>
    //     );
    // }
    // else{
    // return (
    //     <div>
    //         <Cards/>
    //         <NewButton/>
    //     </div>
    // );
    }


export default Viewport;
 