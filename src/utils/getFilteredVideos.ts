import {QueryProps, Video} from "../types";
import {getUsedFilters} from "./getUsedFilters";

export const getFilteredVideos = (data: Video[], initialFilters: QueryProps) => {
  const searchEntries = ["title", "artist"]

  // remove filter entries with empty values
  const {filters} = getUsedFilters(initialFilters);

  // pass the used filters and find the objects that match the query
  return data.filter((video: Video) => Object.entries(filters).every(([prop, find]) => {
      // if the prop is textSearchQuery than search for the query in the Title and Artist object entries
      if (prop === "textSearchQuery") {
        // convert the value to string since we have values that are numbers as song names
        // lower the case of the entry value, and the query search to get every match
        return searchEntries.some(entry => video[entry].toString().toLowerCase().indexOf(find.toLowerCase()) > -1)
      } else {
        // return the videos that matches the value among its entries
        return find.includes(video[prop])
      }
    })
  );
}
