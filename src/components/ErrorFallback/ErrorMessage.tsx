import React from "react";
import {makeStyles, Typography} from "@material-ui/core";

interface ErrorFallbackProps {
  error: string | null
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    height: 300
  },
  errorMessage: {
    color: "red",
    fontWeight: "bold"
  }

});

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({error}) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography variant="h1" color="textPrimary" paragraph gutterBottom>
        Ups!
      </Typography>
      <Typography variant="h4" color="textPrimary" paragraph>
        Sorry, something went wrong :(
      </Typography>
      <Typography variant="h6" color="textPrimary" paragraph>
        {error}
      </Typography>
    </div>
  )
}
