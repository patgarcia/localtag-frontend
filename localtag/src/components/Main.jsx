import React, { useContext } from 'react';
import { DataContext } from './DataContext'
import Viewport from './Viewport'
import cardList from "../data";
import AddLocationIcon from '@material-ui/icons/AddLocation';
import { Grid } from "@material-ui/core";
import Cards from './Cards'
import NewButton from './NewButton';
// assign it to Context object



const Main = () => {
    const getCards = cardObj => {
      return (
        <Grid item xs={12} sm={4}>
          <Cards data={cardObj} />
        </Grid>
      );
    };
  
    return (
      <Grid container spacing={2}>
        {cardList.map(cardObj => getCards(cardObj))}
           <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8} >
            <Grid item xs={false} sm={2} />
           </Grid>
           <NewButton position="fixed"/>
      </Grid>
    );
  };
  
  export default Main;
  





// function Main(props) {

//     // const { kntxt } = useContext(contextObjHere)

//     return (
//         <div>
//             <Viewport/> 
//             {/* The router should cahnge viewport content, prob through context */}
//             {/* <Collections /> that gets called by exact path from router */}

//         </div>
//     );
// }

// export default Main;
