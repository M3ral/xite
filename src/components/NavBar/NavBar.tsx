import React from "react";
import {AppBar, Toolbar} from "@material-ui/core";
import logoSrc from "../../assets/img/xite_logo.png";
import useStyles from "../../hooks/useStyles";

export const NavBar: React.FC = () => {
  const classes = useStyles()
  return (
    <section>
      <AppBar position="relative" className={classes.toolbarContainer}>
        <Toolbar color="pink" className={classes.toolbar}>
          <img src={logoSrc} alt="company logo" className={classes.logo}/>
        </Toolbar>
      </AppBar>
    </section>
  )
}
