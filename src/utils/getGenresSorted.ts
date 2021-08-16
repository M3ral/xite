import {Genre} from "../types";

export const getGenresSorted = (genres: Genre[]) => genres.sort((a:Genre,b:Genre) => a.name.localeCompare(b.name))
