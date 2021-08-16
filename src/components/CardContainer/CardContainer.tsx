import React, {ReactNode} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";

interface CardContainerProps {
  children: ReactNode
}

const useStyles = makeStyles(theme => ({
  cardContainer: {
    display: "grid",
    gridGap: 10,
    gridTemplateColumns: "repeat(4, minmax(300px, 1fr))",
    justifyContent: "center",
    marginBottom: 30,
    paddingTop: 24,
    textAlign: "center",

    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: "repeat(3, minmax(300px, 350px))",
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: "repeat(2, minmax(250px, 300px))",
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: "repeat(1, minmax(150px, 300px))",
    }
  }
}));


export const CardContainer: React.FC<CardContainerProps> = ({children}) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" data-testid="videos">
      <div className={classes.cardContainer}>
        {children}
      </div>
    </Container>
  )
}
