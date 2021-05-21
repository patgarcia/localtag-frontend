import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import NewButton from "./NewButton";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { mergeClasses, creatStyles, makeStyles} from "@material-ui/styles";
import Avatar from '@material-ui/core/Avatar';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1
  }
}))

const Header = () => {
  const classes = useStyles();
  return (
    // <AppBar position ="static">
    //   <Toolbar>
    //     <Typography className={classes.typographyStyles}>
    //       Local Tag
    //     </Typography>
    //     <Avatar aria-label="Avatar" />
    //  
    //   </Toolbar>
    // </AppBar>
    <Grid>
    <SearchBar />
    <Logo />
    </Grid>
  );
}

export default Header;
