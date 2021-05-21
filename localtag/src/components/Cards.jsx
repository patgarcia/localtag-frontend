import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
//   avatar: {
//     backgroundColor: red[500],
//   },
}));

const Cards = ({ data }) => {
   const { hq_image_url, thumbnail_url, description, source } = data;
    return (
    <Card>
      <CardHeader
        // avatar={
        //   <Avatar aria-label="Local Tag" src={thumbnail_url} />
        // }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
            {/* <AddLocationIcon /> */}
          </IconButton>
        }
        // title="Location Tags"
        // subheader="Tags"
      />
      <CardMedia style = {{ height: "150px" }} image={hq_image_url} />
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <IconButton aria-label="share">
          {/* <ShareIcon /> */}
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Cards;

























// import React, {useState, useEffect} from 'react';
// import Card from './Card'
// import { Grid } from '@material-ui/core';

// function Cards(props) {
//     const [cards, setCards] = useState([])

//     useEffect(() => {
//         fetch('http://localhost:4000/cards')
//             .then(res => res.json())
//             .then(data => setCards(data))
//             .catch(console.error)
//     }, [])
    
//     return (
//         <Grid container spacing ={2}>
//             {cards.map(card => {
//                 return <Card card={card}/>
//             })}
//             <Grid item xs={false} sma={2} />
//             <Grid item xs={12} sm={8} />
//         </Grid>
//     );
// }

// export default Cards;
