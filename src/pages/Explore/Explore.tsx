import React, {useEffect, useState} from 'react';
import {QueryProps, Video} from "../../types";
import {useFetch} from "../../hooks/useFetch";
import {Filter} from "../../components/Filter/Filter";
import {getUsedFilters} from "../../utils/getUsedFilters";
import {getFilteredVideos} from "../../utils/getFilteredVideos";
import {Videos} from "../../components/Videos/Videos";
import {Button, makeStyles} from "@material-ui/core";
import {NoResults} from "../../components/NoResults/NoResults";
import {ErrorFallback} from "../../components/ErrorFallback/ErrorMessage";
import {Loader} from "../../components/Loader/Loader";

const filterInitialState = {
  textSearchQuery: '',
  genre_id: [],
  release_year: []
}

const useStyles = makeStyles({
  container: {
    textAlign: "center",
    paddingBottom: 30
  }
});

const Explore = () => {
  const {loading, genres, error, videos, years} = useFetch()
  const [data, setData] = useState<Video[]>([])
  const [filters, setFilters] = React.useState<QueryProps>(filterInitialState);
  const classes = useStyles();

  useEffect(() => {
    let timeoutId: any;
    const {textSearchQuery, genre_id, release_year} = filters
    /* check if any of the filter fields has changed */
    if (textSearchQuery.length > 0 || genre_id.length > 0 || release_year.length > 0) {
      // add a timeout to that we can get the users typed value at once to get better performance
      timeoutId = setTimeout(() => setData(getFilteredVideos(videos, filters)), 500);
    } else {
      setData([...videos.slice(0, 20)])
    }

    // clean up on rerender
    return () => clearTimeout(timeoutId);

  }, [videos, filters])

  const handleFilterChange = (event: React.ChangeEvent<{ name?: string; value: unknown } | HTMLTextAreaElement | HTMLInputElement>) => {
    event.persist();
    setFilters(filters => ({
      ...filters,
      [event.target.name as string]: event.target.value
    }));
  };

  const clearFilters = () => {
    setFilters(filterInitialState)
  }

  const loadMore = () => {
    setData(data => [
      ...data,
      ...videos.slice(data?.length, data?.length + 20)
    ])
  }

  return (
    <section className={classes.container} title="explore container">
      {loading && <Loader/>}

      {/* Show error message if there is an issue with the request */}
      {error && <ErrorFallback error={error}/>}

      {/* show the page content after the loading and if there is no errors */}
      {!loading && !error && (
        <>
          <>
            <Filter genres={genres} years={years} filters={filters} onChange={handleFilterChange}/>
            {/* show button if there is no error message and some filter is filled */}
            {
              Object.keys(getUsedFilters(filters).filters).length > 0
              && <Button onClick={clearFilters} test-dataid="clear-filters" color="secondary">Clear filters</Button>
            }

            {/* show the No results message if there is nothing to show from the filters */}
            {data.length > 0 ? <Videos data={data}/> : <NoResults/>}
          </>

          {/* Hide the button if data array has the same length as the videos array and when the filters are active*/}
          {
            data.length !== videos.length
            && Object.keys(getUsedFilters(filters).filters).length === 0
            && <Button onClick={loadMore} test-dataid="load-more" variant="contained" color="primary">Load more</Button>
          }


        </>
      )
    }
    </section>
  )
}


export default Explore
