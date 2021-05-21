import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from './DataContext';
import Card from './Card'


function Collection({data}) {

    return (
        <div>
            {data ? 
            (data.map(coll => {
                <Card/>
            }))
            : "No data"}
        </div>
    );
}

export default Collection;