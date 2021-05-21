import React from 'react';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
    typographyStyles: {
      flex: 1
    },
    AddPhotoAlternateIcon: {
        
            margin: theme.spacing.unit, // You might not need this now
            position: "fixed",
            bottom: theme.spacing(2),
            right: theme.spacing(2),
          
    }
});


function NewButton(props) {
    return (
        <Grid container justify="flex-end" alignItems="flex-end">   
        <IconButton style={{ bottom: 3, right: 3 }}>
          <AddPhotoAlternateIcon color="secondary"/>
        </IconButton>
    </Grid>
    );
}

export default NewButton;
