import React from "react";
import {Container, Typography} from "@material-ui/core";
import useStyles from "../../hooks/useStyles";

export const NoResults: React.FC = () => {
  const classes = useStyles()

  return (
    <section className={classes.container}>
      <Container maxWidth="sm">
        <Typography variant="h5" align="center" color="textPrimary" paragraph gutterBottom>
          No results :(
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          We are working hard to add new videos to our platform, try again later!
        </Typography>
      </Container>
    </section>
  )
}
