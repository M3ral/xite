import React from "react";
import {ReactComponent as LoaderIcon} from '../../logo.svg';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 300
  },
  loader: {
    height: "7vmin",
    pointerEvents: "none",

    "@media (prefers-reduced-motion: no-preference)": {
      animation: "App-logo-spin infinite 1s linear"
    }
  }
}))

export const Loader: React.FC = () => {
  const classes = useStyles();

  return (
    <section className={classes.container} title="loading spinner">
      <LoaderIcon className={classes.loader}/>
    </section>
  )
}
