import {Card, CardActionArea, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  card: {
    maxWidth: 500,
  },
  media: {
    height: 140,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
});

interface CardProps {
  imgSrc: string
  title: string
  artist: string
}

export const VideoCard: React.FC<CardProps> = ({imgSrc, title, artist}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} data-testid="card">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgSrc}
          title={title}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom component="h4">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {artist}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
