import React, { useContext } from 'react';
import { DataContext } from './DataContext'
import Viewport from './Viewport'
// assign it to Context object

function Main(props) {

    // const { kntxt } = useContext(contextObjHere)

    return (
        <div>
            <Viewport/> 
            {/* The router should cahnge viewport content, prob through context */}
            {/* <Collections /> that gets called by exact path from router */}

        </div>
    );
}

export default Main;
