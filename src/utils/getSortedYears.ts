import {Video} from "../types";

export const getSortedYears = (videos: Video[]) => {
  /* get all years */
  const years = videos.map((video: Video) => video.release_year)

  /* remove duplicates */
  const filteredYears = years.filter((v: number, i: number) => years.indexOf(v) === i)

  /* sort descending */
  return filteredYears.sort((a: number, b: number) => b - a)
}
