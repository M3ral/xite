import React from "react";
import {Video} from "../../types";
import {CardContainer} from "../CardContainer/CardContainer";
import {VideoCard} from "../Card/Card";

interface VideosProps {
  data: Video[]
}

export const Videos: React.FC<VideosProps> = ({data}) => (
  <CardContainer>
    {data?.map(video => (
      <VideoCard key={video.id} artist={video.artist} imgSrc={video.image_url} title={video.title}/>
    ))}
  </CardContainer>
)

